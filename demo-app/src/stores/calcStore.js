import { createStore } from 'redux';

import { calcReducer } from '../reducers/calcReducer';

export const calcStore = createStore(calcReducer);
