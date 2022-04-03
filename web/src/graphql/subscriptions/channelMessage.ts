import { gql } from "@apollo/client";
import { CHANNEL_FRAGMENT } from "../fragment/channel";

export const GET_CHANNEL_SUB = gql`
  subscription ChannelMessage($channelName: String!) {
    channelMessage(channelName: $channelName) {
      ...Channel
    }
  }
  ${CHANNEL_FRAGMENT}
`;
