import { useQuery } from "@apollo/client";
import { GetMeQuery } from "../generated/graphql";
import { GET_ME } from "../graphql/queries/me";

export const useGetMe = () => {
  const { data, loading } = useQuery<GetMeQuery>(GET_ME, {
    onError: (error) => console.log({ error }),
  });
  return { me: data?.me, loading };
};
