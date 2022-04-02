import { ApolloServer } from "apollo-server";
import "dotenv-safe/config";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import resolvers from "./graphql";
import getUser from "./utils/getUser";

const main = async () => {
  // Initiating prisma for apollo context
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    typeDefs: fs.readFileSync(
      path.join(__dirname, "graphql/schema.graphql"),
      "utf-8"
    ),
    resolvers: resolvers,
    context: ({ req, res }) => {
      const token = req.get("Authorization") || "";
      const userId = getUser(token);
      return {
        req,
        res,
        prisma,
        userId,
      };
    },
  });

  server.listen(process.env.PORT, () => {
    console.log(
      `Server started at http://localhost:${process.env.PORT}${server.graphqlPath}`
    );
  });
};
main().catch((err) => console.log(err));
