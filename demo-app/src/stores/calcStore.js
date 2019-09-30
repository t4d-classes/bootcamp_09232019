import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { calcReducer } from '../reducers/calcReducer';

export const calcStore = createStore(
  calcReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
