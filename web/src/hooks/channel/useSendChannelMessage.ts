import { useMutation } from "@apollo/client";
import {
  SendChannelMessageMutation,
  SendChannelMessageMutationVariables,
} from "../../generated/graphql";
import { SEND_CHANNEL_MESSAGE } from "../../graphql/mutations/sendChannelMessage";
import { GET_CHANNEL } from "../../graphql/queries/channel";

export const useSendChannelMessage = (channelName: string) => {
  const [sendMessage, { loading }] = useMutation<
    SendChannelMessageMutation,
    SendChannelMessageMutationVariables
  >(SEND_CHANNEL_MESSAGE, {
    onError: (error) => console.log({ error }),
    refetchQueries: [{ query: GET_CHANNEL, variables: { channelName } }],
  });
  return { sendMessage, loading };
};
