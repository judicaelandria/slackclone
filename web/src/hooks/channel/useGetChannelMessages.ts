import { useQuery } from "@apollo/client";
import {
  GetChannelMessagesQuery,
  GetChannelMessagesQueryVariables,
} from "../../generated/graphql";

import { GET_CHANNEL_MESSAGES } from "../../graphql/queries/channelMessages";

export const useGetChannelMessages = (channelName: string) => {
  const { data, loading, subscribeToMore } = useQuery<
    GetChannelMessagesQuery,
    GetChannelMessagesQueryVariables
  >(GET_CHANNEL_MESSAGES, { variables: { channelName } });
  return { messages: data?.channelMessages, loading, subscribeToMore };
};
