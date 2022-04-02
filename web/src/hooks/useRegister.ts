import { useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  RegisterMutation,
  RegisterMutationVariables,
} from "../generated/graphql";
import { REGISTER } from "../graphql/mutations/register";

export const useRegister = () => {
  const [_, setCookie] = useCookies(["slack-token"]);
  const navigate = useNavigate();
  const [register, { loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(REGISTER, {
    onError: (error) => console.log({ error }),
    onCompleted: (data) => {
      console.log({ data });
      const date = new Date();
      date.setTime(date.getTime() + 120 * 60 * 1000);
      setCookie("slack-token", data.register.token, { expires: date });
      navigate("/login");
    },
  });
  return { register, loading, error };
};
