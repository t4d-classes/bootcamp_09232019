import { createStore } from 'redux';

import { carReducer } from '../reducers/carReducer';

export const carStore = createStore(carReducer);
