import { useQuery } from "@apollo/client";
import { GetUsersQuery } from "../generated/graphql";
import { GET_USERS } from "../graphql/queries/users";

export const useGetUsers = () => {
  const { data, loading, error } = useQuery<GetUsersQuery>(GET_USERS);
  return { users: data?.users, loading, error };
};
