import { combineReducers } from 'redux';

import { resultReducer } from './resultReducer';
import { historyReducer } from './historyReducer';

export const calcReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
});
