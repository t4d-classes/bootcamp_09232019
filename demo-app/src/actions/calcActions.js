export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_HISTORY_ITEM_ACTION = 'DELETE_HISTORY_ITEM';

export const createAddAction = num =>
  ({ type: ADD_ACTION, payload: { num } });
export const createSubtractAction = num =>
  ({ type: SUBTRACT_ACTION, payload: { num } });
export const createMultiplyAction = num =>
  ({ type: MULTIPLY_ACTION, payload: { num } });
export const createDivideAction = num =>
  ({ type: DIVIDE_ACTION, payload: { num } });
export const createClearAction = () =>
  ({ type: CLEAR_ACTION });
export const createDeleteHistoryItemAction = historyItemIndex =>
  ({ type: DELETE_HISTORY_ITEM_ACTION, payload: { historyItemIndex } })