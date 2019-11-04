import React from 'react';
import Views from './views/Views';
import Login from './views/Login/Login';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = () => {
  const {
    data: { authenticated },
  } = useQuery(AUTHENTICATED_QUERY);

  return <>{authenticated ? <Views /> : <Login />}</>;
};

export default Home;
