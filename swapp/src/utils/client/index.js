import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { typeDefs } from './local';
import authLink from './auth';
import errorHandler from '../../shared/resolvers/errorHandler';

const errorLink = onError((error) => console.log(errorHandler(error)));

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const link = from([errorLink, authLink, httpLink]);

const cache = new InMemoryCache({
  addTypename: false,
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers: {},
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});

export default client;
