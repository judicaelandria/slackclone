import { gql } from "@apollo/client";
import { MESSAGE_FRAGMENT } from "../fragment/message";

export const GET_MESSAGES_SUBSCRIPTION = gql`
  subscription GetMessagesSubscription($receiverId: ID!) {
    messages(receiverId: $receiverId) {
      ...Message
    }
  }
  ${MESSAGE_FRAGMENT}
`;
