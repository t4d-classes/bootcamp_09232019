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
    setEditCarId(-1);
  };

  const replaceCar = (car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  }

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  return <>

    <CarTable cars={cars} editCarId={editCarId}
      onDeleteCar={deleteCar} onEditCar={setEditCarId}
      onSaveCar={replaceCar} onCancelCar={() => setEditCarId(-1)} />
    <CarForm onSubmitCar={appendCar} buttonText="Add Car" />
  </>;

};