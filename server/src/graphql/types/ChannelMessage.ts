import { ChannelMessageResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

export const ChannelMessage: ChannelMessageResolvers = {
  // sentBy: (parent, _, ctx: IContext) => {
  //   return ctx.prisma.channelMessage
  //     .findUnique({ where: { id: parent.id } })
  //     .sentBy();
  // },
  channel: (parent, _, ctx: IContext) => {
    return ctx.prisma.channelMessage
      .findUnique({ where: { id: parent.id } })
      .channel();
  },
};
