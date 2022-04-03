import { QueryResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const channels: QueryResolvers["channels"] = async (_, __, ctx: IContext) => {
  return await ctx.prisma.channel.findMany();
};
export default channels;
