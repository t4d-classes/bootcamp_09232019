import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION,
  DIVIDE_ACTION, CLEAR_ACTION
} from '../actions/calcActions';

export const resultReducer = (state = 0, action) => {
  switch(action.type) {
    case ADD_ACTION:
      return state + action.payload.num;
    case SUBTRACT_ACTION:
      return state - action.payload.num;
    case MULTIPLY_ACTION:
      return state * action.payload.num;
    case DIVIDE_ACTION:
      return state / action.payload.num;
    case CLEAR_ACTION:
      return 0;
    default:
      return state;
  }
};