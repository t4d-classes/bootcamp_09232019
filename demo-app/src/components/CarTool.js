import React, { useState } from 'react';

import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState(initialCars.concat());

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
    <header>
      <h1>Car Tool</h1>
    </header>
    <CarTable cars={cars} onDeleteCar={deleteCar} />
    <CarForm onSubmitCar={appendCar} buttonText="Add Car" />
  </>;

};