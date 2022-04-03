import { ChannelResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

export const Channel: ChannelResolvers = {
  messages: async (parent, _, ctx: IContext) => {
    return await ctx.prisma.channel
      .findUnique({ where: { id: parent.id } })
      .messages();
  },
  members: async (parent, _, ctx: IContext) => {
    return await ctx.prisma.channel
      .findUnique({ where: { id: parent.id } })
      .members();
  },
};
