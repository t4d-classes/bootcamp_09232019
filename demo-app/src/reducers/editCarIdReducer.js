import {
  APPEND_CAR_ACTION, DELETE_CAR_ACTION, REPLACE_CAR_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION
} from '../actions/carActions';

export const editCarIdReducer = (editCarId = -1, action) => {

  switch (action.type) {
    case EDIT_CAR_ACTION:
      return action.payload.carId;
    case APPEND_CAR_ACTION:
    case DELETE_CAR_ACTION:
    case REPLACE_CAR_ACTION:
    case CANCEL_CAR_ACTION:
      return -1;
    default:
      return editCarId;
  }

};