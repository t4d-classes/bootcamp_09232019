import React from 'react';

export const ViewCarRow = ({ car, onDeleteCar }) => {

  return <tr key={car.id}>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td><button type="button" onClick={() => onDeleteCar(car.id)}>Delete</button></td>
  </tr>;

};