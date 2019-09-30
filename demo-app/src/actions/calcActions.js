export const ADD_ACTION_REQUEST = 'ADD_REQUEST';
export const ADD_ACTION_DONE = 'ADD_DONE';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_HISTORY_ITEM_ACTION = 'DELETE_HISTORY_ITEM';

export const REFRESH_HISTORY_REQUEST_ACTION = ' REFRESH_HISTORY_REQUEST';
export const REFRESH_HISTORY_DONE_ACTION = ' REFRESH_HISTORY_DONE';

export const createRefreshHistoryRequest = () =>
  ({ type: REFRESH_HISTORY_REQUEST_ACTION });
export const createRefreshHistoryDone = (history) =>
  ({ type: REFRESH_HISTORY_DONE_ACTION, payload: { history } });

export const refreshHistory = () => {

  return dispatch => {

    dispatch(createRefreshHistoryRequest());
    return fetch('http://localhost:3010/history')
      .then(res => res.json())
      .then(history => dispatch(createRefreshHistoryDone(history)));
  };

};


export const createAddActionRequest = num =>
  ({ type: ADD_ACTION_REQUEST, payload: { num } });
export const createAddActionDone = num =>
  ({ type: ADD_ACTION_DONE, payload: { num } });

export const add = (num) => {
  return dispatch => {
    dispatch(createAddActionRequest(num));
    fetch('http://localhost:3010/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        opName: 'ADD',
        opValue: num
      })
    })
      .then(() => dispatch(createAddActionDone(num)))
      .then(() => dispatch(refreshHistory()));
  };
};


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