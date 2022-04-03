import { ApolloError, useMutation } from "@apollo/client";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { LoginMutation, LoginMutationVariables } from "../generated/graphql";
import { LOGIN } from "../graphql/mutations/login";

export const useLogin = () => {
  const [_, setCookie] = useCookies(["slack-token"]);
  const [error, setError] = React.useState<ApolloError | undefined>();
  const navitate = useNavigate();
  const [login, { loading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN, {
    onError: (error) => {
      setError(error);
    },
    onCompleted: (data) => {
      const date = new Date();
      date.setTime(date.getTime() + 120 * 60 * 1000);
      setCookie("slack-token", data.login.token, { expires: date });
      navitate("/");
    },
  });
  return { login, loading, error };
};
