import { ApolloClient, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
  uri: process.env.GATSBY_API_ENDPOINT,
  cache: new InMemoryCache(),
  fetch,
  headers: {
    'x-api-key': process.env.GATSBY_API_KEY,
  },
});

// eslint-disable-next-line no-console
console.log(process.env.GATSBY_API_ENDPOINT);
// eslint-disable-next-line no-console
console.log(process.env.GATSBY_API_KEY);

export default client;
