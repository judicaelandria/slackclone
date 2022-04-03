import { useSubscription } from "@apollo/client";
import {
  ChannelMessageSubscription,
  ChannelMessageSubscriptionVariables,
} from "../generated/graphql";
import { GET_CHANNEL_SUB } from "../graphql/subscriptions/channelMessage";

export const useGetChannelMessageSub = (channelName: string) => {
  const { data, loading, error } = useSubscription<
    ChannelMessageSubscription,
    ChannelMessageSubscriptionVariables
  >(GET_CHANNEL_SUB, {
    variables: { channelName },
    onSubscriptionData: (data) => {
      console.log({ data });
    },
    onSubscriptionComplete: () => {
      console.log("sub");
    },
  });
  return { channel: data?.channelMessage, loading, error };
};
