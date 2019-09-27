import { resultReducer } from './resultReducer';
import { historyReducer } from './historyReducer';

export const calcReducer = (appState = { }, action) => {

  return {
    ...appState,
    result: resultReducer(appState.result, action),
    history: historyReducer(appState.history, action),
  };
};