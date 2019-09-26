import React from 'react';
import ReactDOM from 'react-dom';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';

const calcReducer = (state = 0, action) => {
  console.log('state:', state, 'action:', action);
  switch(action.type) {
    case ADD_ACTION:
      return state + action.payload;
    case SUBTRACT_ACTION:
      return state - action.payload;
    default:
      return state;
  }
};

const createStore = (reducerFn) => {

  let currentState = undefined;
  const subscribers = [];

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducerFn(currentState, action);
      subscribers.forEach( callbackFn => callbackFn() );
    },
    subscribe: (callbackFn) => { subscribers.push(callbackFn); },
  };

};

const calcStore = createStore(calcReducer);

calcStore.subscribe(() => {
  console.log(calcStore.getState());
});

const createAddAction = payload => ({ type: ADD_ACTION, payload });
const createSubtractAction = payload => ({ type: SUBTRACT_ACTION, payload });

calcStore.dispatch(createAddAction(1));
calcStore.dispatch(createSubtractAction(2));
calcStore.dispatch({ type: 'ADD', payload: 3 });
calcStore.dispatch({ type: 'SUBTRACT', payload: 4 });
calcStore.dispatch({ type: 'ADD', payload: 5 });

// create the component tree on #root
ReactDOM.render(<ToolHeader headerText="A" />, document.querySelector('#root'));

// update the component tree of #root
ReactDOM.render(<ToolHeader headerText="B" />, document.querySelector('#root'));

// update the component tree of #root
ReactDOM.render(<ToolHeader headerText="C" />, document.querySelector('#root'));

// Lab Exercise

// 1. Create a Calc Tool component similar to the one I will draw on the board. The component should support multiply, divide, add and subtract

// 2. The component should display the current result and an input for collecting a new operand. When a operator button is clicked, the result should be updated.

// 3. Ensure it works.
