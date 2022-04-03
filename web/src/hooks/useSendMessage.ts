import { useMutation } from "@apollo/client";
import {
  SendMessageMutation,
  SendMessageMutationVariables,
} from "../generated/graphql";
import { SEND_MESSAGE } from "../graphql/mutations/sendMessage";

export const useSendMessage = () => {
  const [sendMessage, { loading }] = useMutation<
    SendMessageMutation,
    SendMessageMutationVariables
  >(SEND_MESSAGE);
  return { sendMessage, loading };
};
