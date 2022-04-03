import { MutationResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const sendChannelMessage: MutationResolvers["sendChannelMessage"] = async (
  _,
  { channelId, content },
  ctx: IContext
) => {
  const channel = await ctx.prisma.channel.findUnique({
    where: { id: channelId },
  });
  const newMessage = await ctx.prisma.channelMessage.create({
    data: {
      content,
      channel: {
        connect: { id: channel!.id },
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
  ctx.pubsub.publish(channel!.name, newMessage);
  return newMessage;
};
export default sendChannelMessage;
