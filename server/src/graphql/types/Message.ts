import { MessageResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

export const Message: MessageResolvers = {
  sentBy: (parent, _, ctx: IContext) => {
    return ctx.prisma.message.findUnique({ where: { id: parent.id } }).sentBy();
  },
  to: (parent, _, ctx: IContext) => {
    return ctx.prisma.message.findUnique({ where: { id: parent.id } }).to();
  },
};
