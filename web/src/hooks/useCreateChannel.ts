import { gql, useMutation } from "@apollo/client";
import {
  CreateChannelMutation,
  CreateChannelMutationVariables,
} from "../generated/graphql";
import { CREATE_CHANNEL } from "../graphql/mutations/createChannel";

export const useCreateChannel = (callback?: () => void) => {
  const [createChannel, { loading }] = useMutation<
    CreateChannelMutation,
    CreateChannelMutationVariables
  >(CREATE_CHANNEL, {
    onError: (error) => console.log({ error }),
    onCompleted: () => {
      callback?.();
    },
    update: (cache, { data }) => {
      // Update the channel cache
      // with the new value from mutation create Channel
      cache.modify({
        fields: {
          channels(existingChannels = []) {
            const newChannel = cache.writeFragment({
              data: data?.createChannel,
              fragment: gql`
                fragment NewChannel on Channel {
                  id
                  name
                  access
                }
              `,
            });
            return [...existingChannels, newChannel];
          },
        },
      });
    },
  });
  return { createChannel, loading };
};
