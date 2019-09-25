import React from 'react';

import { useForm } from '../hooks/useForm';

export const EditCarRow = ({
  car,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  const [ carForm, change ] = useForm({ ...car });
 
  return <tr>
    <td>{car.id}</td>
    <td>
      <input type="text" id="edit-make-input"
        value={carForm.make} onChange={change} />
    </td>
    <td>
      <input type="text" id="edit-model-input"
        value={carForm.model} onChange={change} />
    </td>
    <td>
      <input type="number" id="edit-year-input"
        value={carForm.year} onChange={change} />
    </td>
    <td>
      <input type="text" id="edit-color-input"
        value={carForm.color} onChange={change} />
    </td>
    <td>
      <input type="number" id="edit-price-input"
        value={carForm.price} onChange={change} />
    </td>
    <td>
      <button type="button"
        onClick={() => saveCar({ ...carForm, id: car.id })}>
          Save
      </button>
      <button type="button"
        onClick={cancelCar}>Cancel</button>
    </td>
  </tr>;

};