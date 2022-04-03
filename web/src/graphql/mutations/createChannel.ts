import { gql } from "@apollo/client";

export const CREATE_CHANNEL = gql`
  mutation CreateChannel($name: String!, $access: Access!) {
    createChannel(name: $name, access: $access) {
      id
      name
    }
  }
`;
