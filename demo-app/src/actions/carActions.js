export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';
export const APPEND_CAR_REQUEST_ACTION = 'APPEND_CAR_REQUEST';
export const APPEND_CAR_DONE_ACTION = 'APPEND_CAR_DONE';
export const REPLACE_CAR_REQUEST_ACTION = 'REPLACE_CAR_REQUEST';
export const REPLACE_CAR_DONE_ACTION = 'REPLACE_CAR_DONE';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_DONE_ACTION = 'DELETE_CAR_DONE';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const createRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST_ACTION,
});

export const createRefreshCarsDoneAction = (cars) => ({
  type: REFRESH_CARS_DONE_ACTION,
  payload: { cars },
});

export const refreshCars = () => {
  return dispatch => {
    dispatch(createRefreshCarsRequestAction());
    return fetch(`http://localhost:3010/cars`)
      .then(res => res.json())
      .then(cars => dispatch(createRefreshCarsDoneAction(cars)));
  };
};

export const createAppendCarRequestAction = (car) => ({
  type: APPEND_CAR_REQUEST_ACTION,
  payload: { car },
});

export const createAppendCarDoneAction = (car) => ({
  type: APPEND_CAR_DONE_ACTION,
  payload: { car },
});

export const appendCar = (car) => {
  return dispatch => {
    dispatch(createAppendCarRequestAction());
    return fetch(`http://localhost:3010/cars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(res => res.json())
      .then(car => dispatch(createAppendCarDoneAction(car)));
  };
};

export const createReplaceCarRequestAction = (car) => ({
  type: REPLACE_CAR_REQUEST_ACTION,
  payload: { car },
});

export const createReplaceCarDoneAction = (car) => ({
  type: REPLACE_CAR_DONE_ACTION,
  payload: { car },
});

export const replaceCar = (car) => {
  return dispatch => {
    dispatch(createReplaceCarRequestAction(car));
    return fetch(`http://localhost:3010/cars/` + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(res => res.json())
      .then(() => dispatch(createReplaceCarDoneAction(car)))
      .then(() => dispatch(refreshCars()));
  };
};

export const createDeleteCarRequestAction = (carId) => ({
  type: DELETE_CAR_REQUEST_ACTION,
  payload: { carId },
});

export const createDeleteCarDoneAction = (carId) => ({
  type: DELETE_CAR_DONE_ACTION,
  payload: { carId },
});

export const deleteCar = (carId) => {
  return dispatch => {
    dispatch(createDeleteCarRequestAction(carId));
    return fetch(`http://localhost:3010/cars/` + encodeURIComponent(carId), {
      method: 'DELETE',
    })
      .then(() => dispatch(createDeleteCarDoneAction(carId)))
      .then(() => dispatch(refreshCars()));
  };
};

export const createEditCarAction = (carId) => ({
  type: EDIT_CAR_ACTION,
  payload: { carId },
});

export const createCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});