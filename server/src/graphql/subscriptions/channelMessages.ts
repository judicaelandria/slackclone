import { pubsub } from "../../index";
import { SubscriptionResolvers } from "src/generated/graphql";

const channelMessages: SubscriptionResolvers["channelMessages"] = {
  subscribe: (_, { channelName }, __) => {
    const asyncIterator = pubsub.asyncIterator(channelName);
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
export default channelMessages;
