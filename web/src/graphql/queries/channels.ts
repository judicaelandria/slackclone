import { gql } from "@apollo/client";
import { CHANNEL_FRAGMENT } from "../fragment/channel";

export const GET_CHANNELS = gql`
  query GetChannels {
    channels {
      ...Channel
    }
  }
  ${CHANNEL_FRAGMENT}
`;
