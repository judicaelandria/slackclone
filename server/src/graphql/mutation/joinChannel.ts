import { ApolloError } from "apollo-server-core";
import { MutationResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const joinChannel: MutationResolvers["joinChannel"] = async (
  _,
  { name },
  ctx: IContext
) => {
  const channel = await ctx.prisma.channel.findUnique({ where: { name } });
  if (!channel) {
    throw new ApolloError(
      "Unable to find this channel",
      "CHANNEL_NOT_FOUND",
      undefined
    );
  }
  const updatedChannel = await ctx.prisma.channel.update({
    where: { name },
    data: {
      members: { connect: { id: ctx.userId } },
    },
  });
  return updatedChannel;
};
export default joinChannel;
