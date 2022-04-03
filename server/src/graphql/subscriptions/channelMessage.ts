import { pubsub } from "../../index";
import { SubscriptionResolvers } from "src/generated/graphql";

const channelMessage: SubscriptionResolvers["channelMessage"] = {
  subscribe: (_, { channelName }, __) => {
    return {
      [Symbol.asyncIterator]() {
        return pubsub.asyncIterator(channelName);
      },
    };
  },
  resolve: (payload: any) => {
    return payload;
  },
};
export default channelMessage;
