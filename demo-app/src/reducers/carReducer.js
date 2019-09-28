import { combineReducers } from 'redux';

import { carsReducer } from './carsReducer';
import { editCarIdReducer } from './editCarIdReducer';

export const carReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});
