import { gql } from "@apollo/client";

export const MESSAGE_FRAGMENT = gql`
  fragment Message on Message {
    id
    sentBy {
      fullname
    }
    to {
      fullname
    }
    content
  }
`;
