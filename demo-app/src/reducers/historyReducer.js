import {
  REFRESH_HISTORY_DONE_ACTION, CLEAR_ACTION, DELETE_HISTORY_ITEM_ACTION
} from '../actions/calcActions';

export const historyReducer = (historyItems = [], action) => {

  // if ([
  //   ADD_ACTION_DONE, SUBTRACT_ACTION,
  //   MULTIPLY_ACTION, DIVIDE_ACTION,
  // ].includes(action.type)) {
  //   return [
  //     ...historyItems,
  //     { opName: action.type, opValue: action.payload.num },
  //   ];
  // }

  if (action.type === REFRESH_HISTORY_DONE_ACTION) {
    return action.payload.history;
  }


  if (action.type === DELETE_HISTORY_ITEM_ACTION) {
    return historyItems.filter((h,i) =>
      i !== action.payload.historyItemIndex);
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return historyItems;

};