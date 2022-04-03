import { useQuery } from "@apollo/client";
import { GetChannelsQuery } from "../generated/graphql";
import { GET_CHANNELS } from "../graphql/queries/channels";

export const useGetChannels = () => {
  const {
    data,
    loading: loadingChannels,
    error: channelsError,
  } = useQuery<GetChannelsQuery>(GET_CHANNELS);
  return { channels: data?.channels, loadingChannels, channelsError };
};
