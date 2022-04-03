import { MutationResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const sendChannelMessage: MutationResolvers["sendChannelMessage"] = async (
  _,
  { channelId, content },
  ctx: IContext
) => {
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
  const channel = await ctx.prisma.channel.findUnique({
    where: { id: channelId },
  });
  const messages = await ctx.prisma.channelMessage.findMany({
    where: { channelId },
    include: { sentBy: true, channel: true },
  });
  ctx.pubsub.publish(channel!.name, messages);
  return newMessage;
};
export default sendChannelMessage;
