import { useSubscription } from "@apollo/client";
import {
  GetMessagesSubscriptionSubscription,
  GetMessagesSubscriptionSubscriptionVariables,
} from "../../generated/graphql";
import { GET_MESSAGES_SUBSCRIPTION } from "../../graphql/subscriptions/messages";

export const useMessagesSubscription = (receiverId: string) => {
  const { data, loading } = useSubscription<
    GetMessagesSubscriptionSubscription,
    GetMessagesSubscriptionSubscriptionVariables
  >(GET_MESSAGES_SUBSCRIPTION, {
    variables: { receiverId },
  });
  console.log({ data });
  return { subMessages: data?.messages, loading };
};
