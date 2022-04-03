import { useQuery } from "@apollo/client";
import {
  GetMessagesQuery,
  GetMessagesQueryVariables,
} from "../generated/graphql";
import { GET_MESSAGES } from "../graphql/queries/messages";

export const useGetMessages = (receiverId: string) => {
  const { data, loading, subscribeToMore } = useQuery<
    GetMessagesQuery,
    GetMessagesQueryVariables
  >(GET_MESSAGES, { variables: { receiverId } });
  return { messages: data?.messages, loading, subscribeToMore };
};
