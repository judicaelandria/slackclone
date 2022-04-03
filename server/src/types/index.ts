import { Prisma, PrismaClient } from "@prisma/client";
import { pubsub } from "../index";

export interface IContext {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  userId: string;
  pubsub: typeof pubsub;
}
