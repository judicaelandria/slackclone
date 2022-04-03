import { ApolloError } from "apollo-server";
import { QueryResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const channel: QueryResolvers["channel"] = async (
  _,
  { channelName },
  ctx: IContext
) => {
  const channel = await ctx.prisma.channel.findUnique({
    where: { name: channelName },
  });
  if (!channel)
    throw new ApolloError(
      "Cannot find channel with this name",
      "CHANNEL_NOT_FOUND",
      undefined
    );
  return channel;
};
export default channel;
