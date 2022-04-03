import { gql, useMutation } from "@apollo/client";
import {
  JoinChannelMutation,
  JoinChannelMutationVariables,
} from "../../generated/graphql";
import { JOIN_CHANNEL } from "../../graphql/mutations/joinChannel";

export const useJoinChannel = () => {
  const [joinChannel, { loading: joining }] = useMutation<
    JoinChannelMutation,
    JoinChannelMutationVariables
  >(JOIN_CHANNEL, {
    onError: (error) => console.error(error),
    update: (cache, { data }) => {
      // Modify the existing cache channel data
      cache.modify({
        fields: {
          channel(existingChannel = {}) {
            const updatedChannel = cache.writeFragment({
              data: data?.joinChannel,
              fragment: gql`
                fragment joinedChannel on Channel {
                  id
                  members
                }
              `,
            });
            if (existingChannel.id === data?.joinChannel.id) {
              return data?.joinChannel;
            }
          },
        },
      });
    },
  });
  return { joinChannel, joining };
};
