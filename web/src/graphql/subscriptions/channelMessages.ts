import { gql } from "@apollo/client";

export const GET_CHANNEL_SUBSCRIPTION = gql`
  subscription GetChannelSubscription($channelName: String!) {
    channelMessages(channelName: $channelName) {
      content
      sentBy {
        fullname
      }
    }
  }
`;
