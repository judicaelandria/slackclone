import { gql } from "@apollo/client";
import { CHANNEL_FRAGMENT } from "../fragment/channel";

export const JOIN_CHANNEL = gql`
  mutation JoinChannel($name: String!) {
    joinChannel(name: $name) {
      ...Channel
    }
  }
  ${CHANNEL_FRAGMENT}
`;
