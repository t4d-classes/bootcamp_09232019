import React, { useState } from 'react';

const getInitialCar = () => ({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});

export const CarForm = ({ onSubmitCar, buttonText }) => {

  const [ carForm, setCarForm ] = useState(getInitialCar());

  const change = (e) => {
    // update the state of the carForm, and it will trigger a re-render
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    setCarForm(getInitialCar());
  };

  return <form>

    <div>
      <label htmlFor="make-input">Make</label>
      <input type="text" id="make-input" name="make"
        value={carForm.make} onChange={change} />
    </div>

    <div>
      <label htmlFor="model-input">Model</label>
      <input type="text" id="model-input" name="model"
        value={carForm.model} onChange={change} />
    </div>

    <div>
      <label htmlFor="year-input">Year</label>
      <input type="number" id="year-input" name="year"
        value={carForm.year} onChange={change} />
    </div>

    <div>
      <label htmlFor="color-input">Color</label>
      <input type="text" id="color-input" name="color"
        value={carForm.color} onChange={change} />
    </div>

    <div>
      <label htmlFor="price-input">Price</label>
      <input type="number" id="price-input" name="price"
        value={carForm.price} onChange={change} />
    </div>

    <button type="button" onClick={submitCar}>{buttonText}</button>

  </form>;

};