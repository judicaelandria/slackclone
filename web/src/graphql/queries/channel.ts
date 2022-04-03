import { gql } from "@apollo/client";
import { CHANNEL_FRAGMENT } from "../fragment/channel";

export const GET_CHANNEL = gql`
  query GetChannel($channelName: String!) {
    channel(channelName: $channelName) {
      ...Channel
    }
  }
  ${CHANNEL_FRAGMENT}
`;
