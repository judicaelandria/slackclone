import { QueryResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const users: QueryResolvers["users"] = async (_, __, ctx: IContext) => {
  const connectedUser = await ctx.prisma.user.findUnique({
    where: { id: ctx.userId },
  });
  const users = await ctx.prisma.user.findMany();
  return users.filter((user) => user.id !== connectedUser?.id);
};
export default users;
