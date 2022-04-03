import { pubsub } from "../../index";
import { SubscriptionResolvers } from "src/generated/graphql";

const messages: SubscriptionResolvers["messages"] = {
  subscribe: (_, ___, __) => {
    const asyncIterator = pubsub.asyncIterator("message");
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
