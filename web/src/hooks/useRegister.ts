import { ApolloError, useMutation } from "@apollo/client";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  RegisterMutation,
  RegisterMutationVariables,
} from "../generated/graphql";
import { REGISTER } from "../graphql/mutations/register";

export const useRegister = () => {
  const [error, setError] = React.useState<ApolloError | undefined>();
  const [_, setCookie] = useCookies(["slack-token"]);
  const navigate = useNavigate();
  const [register, { loading }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(REGISTER, {
    onError: (error) => setError(error),
    onCompleted: (data) => {
      const date = new Date();
      date.setTime(date.getTime() + 120 * 60 * 1000);
      setCookie("slack-token", data.register.token, {
        expires: date,
        path: "/",
      });
      navigate("/");
    },
  });
  return { register, loading, error };
};
