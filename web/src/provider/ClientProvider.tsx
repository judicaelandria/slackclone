import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useCookies } from "react-cookie";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI || "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  const token =
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("slack-token="))
      ?.split("=")[1] ?? "";
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
