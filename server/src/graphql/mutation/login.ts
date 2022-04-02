import { ApolloError } from "apollo-server";
import { IContext } from "src/types";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { MutationResolvers } from "src/generated/graphql";

const login: MutationResolvers["login"] = async (
  _: any,
  { input: { email, password } },
  ctx: IContext
) => {
  const user = await ctx.prisma.user.findUnique({ where: { email } });
  if (!user)
    throw new ApolloError(
      "Unable to find the user with this email",
      "USER_NOT_FOUND",
      undefined
    );
  const userPassword = bcrypt.compare(password, user.password);
  if (!userPassword)
    throw new ApolloError(
      "Incorrect password",
      "INCORRECT_PASSWORD",
      undefined
    );
  const token = await jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || "",
    { expiresIn: "2h" }
  );
  return { token };
};

export default login;
