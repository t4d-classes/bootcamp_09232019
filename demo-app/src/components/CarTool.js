import React, { useState } from 'react';

import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState(initialCars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const appendCar = (car) => {
    const newCars = cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    });
    setCars(newCars);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return <>

    <CarTable cars={cars} editCarId={editCarId}
      onDeleteCar={deleteCar} onEditCar={setEditCarId} />
    <CarForm onSubmitCar={appendCar} buttonText="Add Car" />
  </>;

};