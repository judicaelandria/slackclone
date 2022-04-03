import { ApolloError } from "apollo-server";
import { MutationResolvers } from "src/generated/graphql";
import { IContext } from "src/types";

const createChannel: MutationResolvers["createChannel"] = async (
  _,
  { access, name },
  ctx: IContext
) => {
  const channel = await ctx.prisma.channel.findUnique({ where: { name } });
  if (channel)
    throw new ApolloError(
      "A channel with the same name already exist",
      "CHANNEL_ALREADY_EXIST",
      undefined
    );
  const newChannel = await ctx.prisma.channel.create({
    data: {
      name,
      access,
      members: {
        connect: { id: ctx.userId },
      },
      messages: {
        create: [],
      },
    },
  });
  return newChannel;
};
export default createChannel;
