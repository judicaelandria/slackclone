import { Prisma, PrismaClient } from "@prisma/client";

export interface IContext {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  userId: string;
}
