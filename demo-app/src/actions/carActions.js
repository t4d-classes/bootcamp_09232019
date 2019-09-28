export const APPEND_CAR_ACTION = 'APPEND_CAR';
export const REPLACE_CAR_ACTION = 'REPLACE_CAR';
export const DELETE_CAR_ACTION = 'DELETE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const createAppendCarAction = (car) => ({
  type: APPEND_CAR_ACTION,
  payload: { car },
});

export const createReplaceCarAction = (car) => ({
  type: REPLACE_CAR_ACTION,
  payload: { car },
});

export const createDeleteCarAction = (carId) => ({
  type: DELETE_CAR_ACTION,
  payload: { carId },
});

export const createEditCarAction = (carId) => ({
  type: EDIT_CAR_ACTION,
  payload: { carId },
});

export const createCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});