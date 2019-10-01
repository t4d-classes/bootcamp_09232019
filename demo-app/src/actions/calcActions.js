export const ADD_REQUEST_ACTION = 'ADD_REQUEST';
export const ADD_DONE_ACTION = 'ADD_DONE';
export const SUBTRACT_REQUEST_ACTION = 'SUBTRACT_REQUEST';
export const SUBTRACT_DONE_ACTION = 'SUBTRACT_DONE';
export const MULTIPLY_REQUEST_ACTION = 'MULTIPLY_REQUEST';
export const MULTIPLY_DONE_ACTION = 'MULTIPLY_DONE';
export const DIVIDE_REQUEST_ACTION = 'DIVIDE_REQUEST';
export const DIVIDE_DONE_ACTION = 'DIVIDE_DONE';
export const CLEAR_REQUEST_ACTION = 'CLEAR_REQUEST';
export const CLEAR_DONE_ACTION = 'CLEAR_DONE';
export const DELETE_HISTORY_ITEM_REQUEST_ACTION = 'DELETE_HISTORY_ITEM_REQUEST';
export const DELETE_HISTORY_ITEM_DONE_ACTION = 'DELETE_HISTORY_ITEM_DONE';
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

export const createAddRequestAction = num =>
  ({ type: ADD_REQUEST_ACTION, payload: { num } });
export const createAddDoneAction = num =>
  ({ type: ADD_DONE_ACTION, payload: { num } });

export const add = (num) => {
  return dispatch => {
    dispatch(createAddRequestAction(num));
    return fetch('http://localhost:3010/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        opName: 'ADD',
        opValue: num
      })
    })
      .then(() => dispatch(createAddDoneAction(num)))
      .then(() => dispatch(refreshHistory()));
  };
};


export const createSubtractRequestAction = num =>
  ({ type: SUBTRACT_REQUEST_ACTION, payload: { num } });
export const createSubtractDoneAction = num =>
  ({ type: SUBTRACT_DONE_ACTION, payload: { num } });

export const subtract = (num) => {
  return dispatch => {
    dispatch(createSubtractRequestAction(num));
    return fetch('http://localhost:3010/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        opName: 'SUBTRACT',
        opValue: num
      })
    })
      .then(() => dispatch(createSubtractDoneAction(num)))
      .then(() => dispatch(refreshHistory()));
  };
};

export const createMultiplyRequestAction = num =>
  ({ type: MULTIPLY_REQUEST_ACTION, payload: { num } });
export const createMultiplyDoneAction = num =>
  ({ type: MULTIPLY_DONE_ACTION, payload: { num } });

export const multiply = (num) => {
  return dispatch => {
    dispatch(createMultiplyRequestAction(num));
    return fetch('http://localhost:3010/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        opName: 'MULTIPLY',
        opValue: num
      })
    })
      .then(() => dispatch(createMultiplyDoneAction(num)))
      .then(() => dispatch(refreshHistory()));
  };
};

export const createDivideRequestAction = num =>
  ({ type: DIVIDE_REQUEST_ACTION, payload: { num } });
export const createDivideDoneAction = num =>
  ({ type: DIVIDE_DONE_ACTION, payload: { num } });

export const divide = (num) => {
  return dispatch => {
    dispatch(createDivideRequestAction(num));
    return fetch('http://localhost:3010/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        opName: 'DIVIDE',
        opValue: num
      })
    })
      .then(() => dispatch(createDivideDoneAction(num)))
      .then(() => dispatch(refreshHistory()));
  };
};

export const createClearRequestAction = () =>
  ({ type: CLEAR_REQUEST_ACTION });
export const createClearDoneAction = () =>
  ({ type: CLEAR_DONE_ACTION });

export const clear = () => {
  return dispatch => {
    dispatch(createClearRequestAction());
    return fetch('http://localhost:3010/history')
      .then(res => res.json())
      .then(history => Promise.all(history.map(historyItem =>
          fetch(
            `http://localhost:3010/history/${historyItem.id}`,
            { method: 'DELETE' },
          ))))
      .then(() => dispatch(createClearDoneAction()))
      .then(() => dispatch(refreshHistory()));
  };
};

export const createDeleteHistoryItemRequestAction = historyItemId =>
  ({ type: DELETE_HISTORY_ITEM_REQUEST_ACTION, payload: { historyItemId } });
export const createDeleteHistoryItemDoneAction = historyItemId =>
  ({ type: DELETE_HISTORY_ITEM_DONE_ACTION, payload: { historyItemId } });

export const deleteHistoryItem = (historyItemId) => {
  return dispatch => {
    dispatch(createDeleteHistoryItemRequestAction(historyItemId));
    return fetch(
      `http://localhost:3010/history/${historyItemId}`,
      { method: 'DELETE' },
    )
      .then(() => dispatch(createDeleteHistoryItemDoneAction(historyItemId)))
      .then(() => dispatch(refreshHistory()));
  };
};
  