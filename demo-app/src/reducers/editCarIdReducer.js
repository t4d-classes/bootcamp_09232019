import {
  REFRESH_CARS_DONE_ACTION,
  EDIT_CAR_ACTION,
} from '../actions/carActions';

export const editCarIdReducer = (editCarId = -1, action) => {

  switch (action.type) {
    case EDIT_CAR_ACTION:
      return action.payload.carId;
    case REFRESH_CARS_DONE_ACTION:
      return -1;
    default:
      return editCarId;
  }

};