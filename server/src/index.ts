import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import resolvers from "./graphql";
import getUser from "./utils/getUser";
import { PubSub } from "graphql-subscriptions";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import { createServer } from "http";
import cors from "cors";

export const pubsub = new PubSub();
const main = async () => {
  // Initiating prisma for apollo context
  const typeDefs = fs.readFileSync(
    path.join(__dirname, "graphql/schema.graphql"),
    "utf-8"
  );
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const app = express();
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
  const httpServer = createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  const serverCleanup = useServer(
    {
      schema,
      onConnect: () => console.log("connected"),
      onDisconnect: () => console.log("Disconnected"),
    },
    wsServer
  );

  const prisma = new PrismaClient();
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
    context: ({ req, res }) => ({
      req,
      res,
      prisma,
      userId:
        req && req.get("authorization")
          ? getUser(req.get("authorization")?.slice(7) || "")?.userId
          : "",
      pubsub,
    }),
  });
  await server.start();
  server.applyMiddleware({ app, cors: false });

  httpServer.listen(process.env.PORT, () => {
    console.log(
      `Server started at http://localhost:${process.env.PORT}${server.graphqlPath}`
    );
  });
};
main().catch((err) => console.log(err));
