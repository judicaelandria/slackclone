import { gql } from "@apollo/client";

export const GET_CHANNEL_MESSAGES = gql`
  query GetChannelMessages($channelName: String!) {
    channelMessages(channelName: $channelName) {
      id
      sentBy {
        fullname
      }
      content
    }
  }
`;
