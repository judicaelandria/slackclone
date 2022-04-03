import { pubsub } from "../../index";
import { SubscriptionResolvers } from "src/generated/graphql";

const messages: SubscriptionResolvers["messages"] = {
  subscribe: (_, { receiverId }, __) => {
    const asyncIterator = pubsub.asyncIterator(receiverId);
    return {
      [Symbol.asyncIterator]() {
        return asyncIterator;
      },
    };
  },
  resolve: (payload: any) => {
    return payload;
  },
};

export default messages;
