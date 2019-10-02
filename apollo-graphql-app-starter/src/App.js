import * as React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import { CarTable } from './components/CarTable';
import { CarForm } from './components/CarForm';

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

const APPEND_CAR_MUTATION = gql`
  mutation AppendCar($car: AppendCar) {
    appendCar(car: $car) {
      id make model year color price
    }
  }
`;


export const App = () => {

  const { loading, data, error } = useQuery(APP_QUERY);
  const [ mutateAppendCar ] = useMutation(APPEND_CAR_MUTATION);

  const appendCar = car => {

    mutateAppendCar({
      variables: { car },
      // refetchQueries: [ { query: APP_QUERY } ],
      optimisticResponse: {
        appendCar: {
          ...car,
          id: "-1",
          __typename: 'Car'
        },
      },
      // when using optimistic response, update executes twice
      // first time the result is the optimisitic response
      // second time the result is the real result
      update(store, { data: { appendCar: car }}) {

        console.log(car);

        let storeData = store.readQuery({ query: APP_QUERY });
        
        storeData = {
          ...storeData,
          cars: storeData.cars.concat(car),
        };

        store.writeQuery({ query: APP_QUERY, data: storeData });
      },
    });

  };

  if (loading) { return <div>Loading!</div>; }
  if (error) { return <div>Error: {error}</div>; }

  return <>
    <CarTable cars={data.cars} />
    <CarForm onSubmitCar={appendCar} buttonText="Add Car" />
  </>;
};
