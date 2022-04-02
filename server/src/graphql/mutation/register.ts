import { ApolloError } from "apollo-server";
import { IContext } from "src/types";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { MutationResolvers } from "src/generated/graphql";

const register: MutationResolvers["register"] = async (
  _: any,
  { input: { email, password } },
  ctx: IContext
) => {
  const user = await ctx.prisma.user.findUnique({ where: { email } });
  if (user)
    throw new ApolloError(
      "user already exist",
      "USER_ALREADY_EXIST",
      undefined
    );
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await ctx.prisma.user.create({
    data: { email, password: hashedPassword },
  });
  const token = await jwt.sign(
    { userId: newUser.id },
    process.env.JWT_SECRET || "",
    { expiresIn: "2h" }
  );

  return { token };
};
export default register;
