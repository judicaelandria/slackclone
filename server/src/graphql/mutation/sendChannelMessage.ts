import { MutationResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const sendChannelMessage: MutationResolvers["sendChannelMessage"] = async (
  _,
  { channelId, content },
  ctx: IContext
) => {
  const channelMessages = await ctx.prisma.channelMessage.findMany({
    where: { channel: { id: channelId } },
  });
  const newMessage = await ctx.prisma.channelMessage.create({
    data: {
      content,
      channel: {
        connect: { id: channelId },
      },
      sentBy: {
        connect: { id: ctx.userId },
      },
    },
    include: {
      channel: true,
      sentBy: true,
    },
  });
  ctx.pubsub.publish(channelId, [...channelMessages, newMessage]);
  return newMessage;
};
export default sendChannelMessage;
