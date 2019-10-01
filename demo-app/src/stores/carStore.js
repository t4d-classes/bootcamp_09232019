import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { carReducer } from '../reducers/carReducer';

export const carStore = createStore(
  carReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
