import * as React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const APP_QUERY = gql`
  query AppQuery {
    message
  }
`;


export const App = () => {

  const { loading, data, error } = useQuery(APP_QUERY);

  if (loading) {
    return <div>Loading!</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{data.message}</div>;
};
