import { useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { LoginMutation, LoginMutationVariables } from "../generated/graphql";
import { LOGIN } from "../graphql/mutations/login";

export const useLogin = () => {
  const [_, setCookie] = useCookies(["slack-token"]);
  const navitate = useNavigate();
  const [login, { loading, error }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN, {
    onError: (error) => console.log({ error }),
    onCompleted: (data) => {
      const date = new Date();
      date.setTime(date.getTime() + 120 * 60 * 1000);
      setCookie("slack-token", data.login.token, { expires: date });
      navitate("/");
    },
  });
  return { login, loading, error };
};
