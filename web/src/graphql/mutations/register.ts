import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($email: String!, $fullname: String!, $password: String!) {
    register(
      input: { email: $email, fullname: $fullname, password: $password }
    ) {
      token
    }
  }
`;
