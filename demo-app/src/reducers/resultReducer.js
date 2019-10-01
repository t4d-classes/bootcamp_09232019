import {
  ADD_DONE_ACTION, SUBTRACT_DONE_ACTION, MULTIPLY_DONE_ACTION,
  DIVIDE_DONE_ACTION, CLEAR_DONE_ACTION
} from '../actions/calcActions';

export const resultReducer = (result = 0, action) => {
  switch(action.type) {
    case ADD_DONE_ACTION:
      return result + action.payload.num;
    case SUBTRACT_DONE_ACTION:
      return result - action.payload.num;
    case MULTIPLY_DONE_ACTION:
      return result * action.payload.num;
    case DIVIDE_DONE_ACTION:
      return result / action.payload.num;
    case CLEAR_DONE_ACTION:
      return 0;
    default:
      return result;
  }
};