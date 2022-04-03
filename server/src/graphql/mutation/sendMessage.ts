// import { pubsub } from "../../index";
import { MutationResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const sendMessage: MutationResolvers["sendMessage"] = async (
  _,
  { content, receiverId },
  ctx: IContext
) => {
  const newMessage = await ctx.prisma.message.create({
    data: {
      content: content,
      sentBy: { connect: { id: ctx.userId } },
      to: { connect: { id: receiverId } },
    },
    include: {
      to: true,
      sentBy: true,
    },
  });
  const messages = await ctx.prisma.message.findMany({
    where: { sentBy: { id: ctx.userId }, to: { id: receiverId } },
    include: { sentBy: true },
  });
  ctx.pubsub.publish("message", messages);
  return newMessage;
};
export default sendMessage;
