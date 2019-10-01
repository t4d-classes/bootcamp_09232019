import {
  REFRESH_HISTORY_DONE_ACTION
} from '../actions/calcActions';

export const historyReducer = (historyItems = [], action) => {

  if (action.type === REFRESH_HISTORY_DONE_ACTION) {
    return action.payload.history;
  }

  return historyItems;
};