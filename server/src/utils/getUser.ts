import * as jwt from "jsonwebtoken";

const getUser = (token: string) => {
  try {
    if (token) {
      const data = jwt.verify(token, process.env.JWT_SECRET || "") as Record<
        string,
        any
      >;
      return {
        userId: data.userId,
      };
    }
    return null;
  } catch (error) {
    return null;
  }
};
export default getUser;
