import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum Access {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Channel = {
  __typename?: 'Channel';
  access: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  members?: Maybe<Array<User>>;
  messages?: Maybe<Array<ChannelMessage>>;
  name?: Maybe<Scalars['String']>;
};

export type ChannelMessage = {
  __typename?: 'ChannelMessage';
  channel?: Maybe<Channel>;
  content: Scalars['String'];
  id: Scalars['ID'];
  sentBy?: Maybe<User>;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  id: Scalars['ID'];
  sentBy?: Maybe<User>;
  to?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChannel: Channel;
  joinChannel: Channel;
  login: UserPayload;
  register: UserPayload;
  sendChannelMessage: ChannelMessage;
  sendMessage: Message;
};


export type MutationCreateChannelArgs = {
  access: Access;
  name: Scalars['String'];
};


export type MutationJoinChannelArgs = {
  name: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UserInput;
};


export type MutationRegisterArgs = {
  input: RegisterUserInput;
};


export type MutationSendChannelMessageArgs = {
  channelId: Scalars['ID'];
  content: Scalars['String'];
};


export type MutationSendMessageArgs = {
  content: Scalars['String'];
  receiverId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  channel?: Maybe<Channel>;
  channelMessages: Array<ChannelMessage>;
  channels: Array<Channel>;
  me: User;
  messages: Array<Message>;
  users: Array<User>;
};


export type QueryChannelArgs = {
  channelName: Scalars['String'];
};


export type QueryChannelMessagesArgs = {
  channelName: Scalars['String'];
};


export type QueryMessagesArgs = {
  receiverId: Scalars['ID'];
};

export type RegisterUserInput = {
  email: Scalars['String'];
  fullname: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  channelMessages: Array<ChannelMessage>;
  messages: Array<Message>;
};


export type SubscriptionChannelMessagesArgs = {
  channelName: Scalars['String'];
};


export type SubscriptionMessagesArgs = {
  receiverId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  fullname: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  token: Scalars['String'];
};

export type ChannelFragment = { __typename?: 'Channel', id: string, name?: string | null, access: string, members?: Array<{ __typename?: 'User', id: string }> | null, messages?: Array<{ __typename?: 'ChannelMessage', id: string, content: string, sentBy?: { __typename?: 'User', id: string, fullname: string } | null }> | null };

export type MessageFragment = { __typename?: 'Message', id: string, content: string, sentBy?: { __typename?: 'User', fullname: string } | null, to?: { __typename?: 'User', fullname: string } | null };

export type CreateChannelMutationVariables = Exact<{
  name: Scalars['String'];
  access: Access;
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel: { __typename?: 'Channel', id: string, name?: string | null } };

export type JoinChannelMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type JoinChannelMutation = { __typename?: 'Mutation', joinChannel: { __typename?: 'Channel', id: string, name?: string | null, access: string, members?: Array<{ __typename?: 'User', id: string }> | null, messages?: Array<{ __typename?: 'ChannelMessage', id: string, content: string, sentBy?: { __typename?: 'User', id: string, fullname: string } | null }> | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserPayload', token: string } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  fullname: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserPayload', token: string } };

export type SendChannelMessageMutationVariables = Exact<{
  channelId: Scalars['ID'];
  content: Scalars['String'];
}>;


export type SendChannelMessageMutation = { __typename?: 'Mutation', sendChannelMessage: { __typename?: 'ChannelMessage', id: string, content: string, sentBy?: { __typename?: 'User', id: string } | null, channel?: { __typename?: 'Channel', id: string } | null } };

export type SendMessageMutationVariables = Exact<{
  content: Scalars['String'];
  receiverId: Scalars['ID'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: string } };

export type GetChannelQueryVariables = Exact<{
  channelName: Scalars['String'];
}>;


export type GetChannelQuery = { __typename?: 'Query', channel?: { __typename?: 'Channel', id: string, name?: string | null, access: string, members?: Array<{ __typename?: 'User', id: string }> | null, messages?: Array<{ __typename?: 'ChannelMessage', id: string, content: string, sentBy?: { __typename?: 'User', id: string, fullname: string } | null }> | null } | null };

export type GetChannelMessagesQueryVariables = Exact<{
  channelName: Scalars['String'];
}>;


export type GetChannelMessagesQuery = { __typename?: 'Query', channelMessages: Array<{ __typename?: 'ChannelMessage', id: string, content: string, sentBy?: { __typename?: 'User', fullname: string } | null }> };

export type GetChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename?: 'Channel', id: string, name?: string | null, access: string, members?: Array<{ __typename?: 'User', id: string }> | null, messages?: Array<{ __typename?: 'ChannelMessage', id: string, content: string, sentBy?: { __typename?: 'User', id: string, fullname: string } | null }> | null }> };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, fullname: string, email: string } };

export type GetMessagesQueryVariables = Exact<{
  receiverId: Scalars['ID'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, content: string, sentBy?: { __typename?: 'User', fullname: string } | null, to?: { __typename?: 'User', fullname: string } | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, fullname: string }> };

export type GetMessagesSubscriptionSubscriptionVariables = Exact<{
  receiverId: Scalars['ID'];
}>;


export type GetMessagesSubscriptionSubscription = { __typename?: 'Subscription', messages: Array<{ __typename?: 'Message', id: string, content: string, sentBy?: { __typename?: 'User', fullname: string } | null, to?: { __typename?: 'User', fullname: string } | null }> };

export const ChannelFragmentDoc = gql`
    fragment Channel on Channel {
  id
  name
  access
  members {
    id
  }
  messages {
    id
    content
    sentBy {
      id
      fullname
    }
  }
}
    `;
export const MessageFragmentDoc = gql`
    fragment Message on Message {
  id
  sentBy {
    fullname
  }
  to {
    fullname
  }
  content
}
    `;
export const CreateChannelDocument = gql`
    mutation CreateChannel($name: String!, $access: Access!) {
  createChannel(name: $name, access: $access) {
    id
    name
  }
}
    `;
export type CreateChannelMutationFn = Apollo.MutationFunction<CreateChannelMutation, CreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      name: // value for 'name'
 *      access: // value for 'access'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: Apollo.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, options);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = Apollo.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = Apollo.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;
export const JoinChannelDocument = gql`
    mutation JoinChannel($name: String!) {
  joinChannel(name: $name) {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;
export type JoinChannelMutationFn = Apollo.MutationFunction<JoinChannelMutation, JoinChannelMutationVariables>;

/**
 * __useJoinChannelMutation__
 *
 * To run a mutation, you first call `useJoinChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinChannelMutation, { data, loading, error }] = useJoinChannelMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useJoinChannelMutation(baseOptions?: Apollo.MutationHookOptions<JoinChannelMutation, JoinChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinChannelMutation, JoinChannelMutationVariables>(JoinChannelDocument, options);
      }
export type JoinChannelMutationHookResult = ReturnType<typeof useJoinChannelMutation>;
export type JoinChannelMutationResult = Apollo.MutationResult<JoinChannelMutation>;
export type JoinChannelMutationOptions = Apollo.BaseMutationOptions<JoinChannelMutation, JoinChannelMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $fullname: String!, $password: String!) {
  register(input: {email: $email, fullname: $fullname, password: $password}) {
    token
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      fullname: // value for 'fullname'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendChannelMessageDocument = gql`
    mutation SendChannelMessage($channelId: ID!, $content: String!) {
  sendChannelMessage(channelId: $channelId, content: $content) {
    id
    sentBy {
      id
    }
    content
    channel {
      id
    }
  }
}
    `;
export type SendChannelMessageMutationFn = Apollo.MutationFunction<SendChannelMessageMutation, SendChannelMessageMutationVariables>;

/**
 * __useSendChannelMessageMutation__
 *
 * To run a mutation, you first call `useSendChannelMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendChannelMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendChannelMessageMutation, { data, loading, error }] = useSendChannelMessageMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useSendChannelMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendChannelMessageMutation, SendChannelMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendChannelMessageMutation, SendChannelMessageMutationVariables>(SendChannelMessageDocument, options);
      }
export type SendChannelMessageMutationHookResult = ReturnType<typeof useSendChannelMessageMutation>;
export type SendChannelMessageMutationResult = Apollo.MutationResult<SendChannelMessageMutation>;
export type SendChannelMessageMutationOptions = Apollo.BaseMutationOptions<SendChannelMessageMutation, SendChannelMessageMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($content: String!, $receiverId: ID!) {
  sendMessage(content: $content, receiverId: $receiverId) {
    id
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      content: // value for 'content'
 *      receiverId: // value for 'receiverId'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const GetChannelDocument = gql`
    query GetChannel($channelName: String!) {
  channel(channelName: $channelName) {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;

/**
 * __useGetChannelQuery__
 *
 * To run a query within a React component, call `useGetChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelQuery({
 *   variables: {
 *      channelName: // value for 'channelName'
 *   },
 * });
 */
export function useGetChannelQuery(baseOptions: Apollo.QueryHookOptions<GetChannelQuery, GetChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelQuery, GetChannelQueryVariables>(GetChannelDocument, options);
      }
export function useGetChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelQuery, GetChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelQuery, GetChannelQueryVariables>(GetChannelDocument, options);
        }
export type GetChannelQueryHookResult = ReturnType<typeof useGetChannelQuery>;
export type GetChannelLazyQueryHookResult = ReturnType<typeof useGetChannelLazyQuery>;
export type GetChannelQueryResult = Apollo.QueryResult<GetChannelQuery, GetChannelQueryVariables>;
export const GetChannelMessagesDocument = gql`
    query GetChannelMessages($channelName: String!) {
  channelMessages(channelName: $channelName) {
    id
    sentBy {
      fullname
    }
    content
  }
}
    `;

/**
 * __useGetChannelMessagesQuery__
 *
 * To run a query within a React component, call `useGetChannelMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelMessagesQuery({
 *   variables: {
 *      channelName: // value for 'channelName'
 *   },
 * });
 */
export function useGetChannelMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetChannelMessagesQuery, GetChannelMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelMessagesQuery, GetChannelMessagesQueryVariables>(GetChannelMessagesDocument, options);
      }
export function useGetChannelMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelMessagesQuery, GetChannelMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelMessagesQuery, GetChannelMessagesQueryVariables>(GetChannelMessagesDocument, options);
        }
export type GetChannelMessagesQueryHookResult = ReturnType<typeof useGetChannelMessagesQuery>;
export type GetChannelMessagesLazyQueryHookResult = ReturnType<typeof useGetChannelMessagesLazyQuery>;
export type GetChannelMessagesQueryResult = Apollo.QueryResult<GetChannelMessagesQuery, GetChannelMessagesQueryVariables>;
export const GetChannelsDocument = gql`
    query GetChannels {
  channels {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;

/**
 * __useGetChannelsQuery__
 *
 * To run a query within a React component, call `useGetChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChannelsQuery(baseOptions?: Apollo.QueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, options);
      }
export function useGetChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, options);
        }
export type GetChannelsQueryHookResult = ReturnType<typeof useGetChannelsQuery>;
export type GetChannelsLazyQueryHookResult = ReturnType<typeof useGetChannelsLazyQuery>;
export type GetChannelsQueryResult = Apollo.QueryResult<GetChannelsQuery, GetChannelsQueryVariables>;
export const GetMeDocument = gql`
    query GetMe {
  me {
    id
    fullname
    email
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($receiverId: ID!) {
  messages(receiverId: $receiverId) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      receiverId: // value for 'receiverId'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
    fullname
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetMessagesSubscriptionDocument = gql`
    subscription GetMessagesSubscription($receiverId: ID!) {
  messages(receiverId: $receiverId) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useGetMessagesSubscriptionSubscription__
 *
 * To run a query within a React component, call `useGetMessagesSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesSubscriptionSubscription({
 *   variables: {
 *      receiverId: // value for 'receiverId'
 *   },
 * });
 */
export function useGetMessagesSubscriptionSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetMessagesSubscriptionSubscription, GetMessagesSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetMessagesSubscriptionSubscription, GetMessagesSubscriptionSubscriptionVariables>(GetMessagesSubscriptionDocument, options);
      }
export type GetMessagesSubscriptionSubscriptionHookResult = ReturnType<typeof useGetMessagesSubscriptionSubscription>;
export type GetMessagesSubscriptionSubscriptionResult = Apollo.SubscriptionResult<GetMessagesSubscriptionSubscription>;