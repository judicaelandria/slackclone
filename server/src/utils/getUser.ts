import * as jwt from "jsonwebtoken";

const getUser = (token: string) => {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET || "");
    }
    return null;
  } catch (error) {
    return null;
  }
};
export default getUser;
