import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation SendMessage($content: String!, $receiverId: ID!) {
    sendMessage(content: $content, receiverId: $receiverId) {
      id
    }
  }
`;
