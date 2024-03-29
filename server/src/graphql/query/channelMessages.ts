import { QueryResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const channelMessages: QueryResolvers["channelMessages"] = async (
  _,
  { channelName },
  ctx: IContext
) => {
  const messages = await ctx.prisma.channelMessage.findMany({
    where: { channel: { name: channelName } },
    include: { sentBy: true },
  });
  ctx.pubsub.publish("channelMessage", messages);
  return messages;
};
export default channelMessages;
