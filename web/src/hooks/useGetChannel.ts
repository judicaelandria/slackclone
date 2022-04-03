import { useQuery } from "@apollo/client";
import { GetChannelQuery } from "../generated/graphql";
import { GET_CHANNEL } from "../graphql/queries/channel";

export const useGetChannel = (channelName: string) => {
  const { data, loading, error } = useQuery<GetChannelQuery>(GET_CHANNEL, {
    variables: { channelName },
  });
  return { channel: data?.channel, loading, error };
};
