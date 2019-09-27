import React from 'react';
import PropTypes from 'prop-types';

import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = ({
  cars,  editCarId,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => car.id === editCarId
          ? <EditCarRow key={car.id} car={car}
            onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <ViewCarRow key={car.id} car={car}
            onDeleteCar={deleteCar} onEditCar={editCar} />)}
    </tbody>
  </table>

};

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  })),
  onDeleteCar: PropTypes.func,
};