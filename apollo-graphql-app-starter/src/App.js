import * as React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

import { CarTable } from './components/CarTable';

const APP_QUERY = gql`
  query App {
    cars {
      id
      make
      model
      year
      color
      price
    }
  }
`;


export const App = () => {

  const { loading, data, error } = useQuery(APP_QUERY);

  if (loading) { return <div>Loading!</div>; }
  if (error) { return <div>Error: {error}</div>; }

  return <CarTable cars={data.cars} />;
};
