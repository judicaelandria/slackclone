import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const token =
  document.cookie
    .split("; ")
    .find((row) => row.startsWith("slack-token="))
    ?.split("=")[1] ?? "";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI || "http://localhost:4000/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/graphql",
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});

interface ClientProviderProps {
  children: React.ReactElement;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <BrowserRouter>
          <CookiesProvider>{children}</CookiesProvider>
        </BrowserRouter>
      </React.StrictMode>
    </ApolloProvider>
  );
};
export default ClientProvider;
