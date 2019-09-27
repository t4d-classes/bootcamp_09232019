import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './components/CarTool';

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'white', price: 25000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 125000 },
];

ReactDOM.render(
  <CarTool cars={carList} />,
  document.querySelector('#root'),
);