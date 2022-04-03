import { gql } from "@apollo/client";

export const CHANNEL_FRAGMENT = gql`
  fragment Channel on Channel {
    id
    name
    access
    members {
      id
    }
    messages {
      id
      content
      sentBy {
        id
        fullname
      }
    }
  }
`;
