import { useSubscription } from "@apollo/client";
import {
  GetChannelSubscriptionSubscription,
  GetChannelSubscriptionSubscriptionVariables,
} from "../../generated/graphql";
import { GET_CHANNEL_SUBSCRIPTION } from "../../graphql/subscriptions/channelMessages";
import useSound from "use-sound";
import notification from "../../media/notification.mp3";

export const useChannelMessageSub = (channelName: string) => {
  const [play] = useSound(notification);
  const { data, loading } = useSubscription<
    GetChannelSubscriptionSubscription,
    GetChannelSubscriptionSubscriptionVariables
  >(GET_CHANNEL_SUBSCRIPTION, {
    variables: { channelName },
    onSubscriptionData: () => play(),
  });
  return { subChannelMessages: data?.channelMessages, loading };
};
