import { QueryResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const messages: QueryResolvers["messages"] = async (
  _,
  { receiverId },
  ctx: IContext
) => {
  const messages = await ctx.prisma.message.findMany({
    where: {
      OR: [
        {
          sentById: ctx.userId,
          toId: receiverId,
        },
        {
          sentById: receiverId,
          toId: ctx.userId,
        },
      ],
    },
    include: { sentBy: true, to: true },
  });
  ctx.pubsub.publish(receiverId, messages);
  return messages;
};
export default messages;
