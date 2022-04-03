import { gql } from "@apollo/client";

export const SEND_CHANNEL_MESSAGE = gql`
  mutation SendChannelMessage($channelId: ID!, $content: String!) {
    sendChannelMessage(channelId: $channelId, content: $content) {
      id
      sentBy {
        id
      }
      content
      channel {
        id
      }
    }
  }
`;
