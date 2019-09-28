import {
  APPEND_CAR_ACTION,
  REPLACE_CAR_ACTION,
  DELETE_CAR_ACTION,
} from '../actions/carActions';

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'white', price: 25000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 125000 },
];

export const carsReducer = (cars = carList, action) => {

  switch (action.type) {
    case APPEND_CAR_ACTION:
      return cars.concat({
        ...action.payload.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      });
    case REPLACE_CAR_ACTION:
      const replaceCarIndex = cars.findIndex(c => c.id === action.payload.car.id);
      const newCars = cars.concat();
      newCars[replaceCarIndex] = action.payload.car;
      return newCars;
    case DELETE_CAR_ACTION:
      return cars.filter(c => c.id !== action.payload.carId);
    default:
      return cars;
  }

};