import {
  REFRESH_CARS_DONE_ACTION,
} from '../actions/carActions';

export const carsReducer = (cars = [], action) => {

  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.payload.cars;
  }

  return cars;
};