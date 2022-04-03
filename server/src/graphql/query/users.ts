import { QueryResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const users: QueryResolvers["users"] = async (_, __, ctx: IContext) => {
  return await ctx.prisma.user.findMany();
};
export default users;
