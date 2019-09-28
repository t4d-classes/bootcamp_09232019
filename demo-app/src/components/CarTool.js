import React from 'react';

import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId,
  onAppendCar: appendCar,
  onReplaceCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
}) => {

  return <>
    <CarTable cars={cars} editCarId={editCarId}
      onDeleteCar={deleteCar} onEditCar={editCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar} />
    <CarForm onSubmitCar={appendCar} buttonText="Add Car" />
  </>;
};
