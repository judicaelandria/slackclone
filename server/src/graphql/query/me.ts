import { ApolloError } from "apollo-server";
import { QueryResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const me: QueryResolvers["me"] = async (_: any, __: any, ctx: IContext) => {
  const user = await ctx.prisma.user.findUnique({ where: { id: ctx.userId } });
  console.log({ user });
  if (!user)
    throw new ApolloError(
      "Unable to find the corresponded user",
      "USER_NOT_FOUND"
    );
  return user;
};
export default me;
