import { useSubscription } from "@apollo/client";
import {
  GetMessagesSubscriptionSubscription,
  GetMessagesSubscriptionSubscriptionVariables,
} from "../../generated/graphql";
import { GET_MESSAGES_SUBSCRIPTION } from "../../graphql/subscriptions/messages";
import useSound from "use-sound";
import notification from "../../media/notification.mp3";

export const useMessagesSubscription = (receiverId: string) => {
  const [play] = useSound(notification);
  const { data, loading } = useSubscription<
    GetMessagesSubscriptionSubscription,
    GetMessagesSubscriptionSubscriptionVariables
  >(GET_MESSAGES_SUBSCRIPTION, {
    variables: { receiverId },
    onSubscriptionData: () => play(),
  });
  return { subMessages: data?.messages, loading };
};
