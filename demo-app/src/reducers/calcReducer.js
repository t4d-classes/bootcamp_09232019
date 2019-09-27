import { resultReducer } from './resultReducer';
import { historyReducer } from './historyReducer';

export const calcReducer = (state = { }, action) => {

  return {
    ...state,
    result: resultReducer(state.result, action),
    history: historyReducer(state.history, action),
  };
};