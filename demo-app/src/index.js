import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';

const calcReducer = (state = { result: 0, history: [] }, action) => {
  switch(action.type) {
    case ADD_ACTION:
      return {
        ...state,
        history: [
          ...state.history,
          { opName: action.type, opValue: action.payload },
        ],
        result: state.result + action.payload,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        history: [
          ...state.history,
          { opName: action.type, opValue: action.payload },
        ],
        result: state.result - action.payload,
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        history: [
          ...state.history,
          { opName: action.type, opValue: action.payload },
        ],
        result: state.result * action.payload,
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        history: [
          ...state.history,
          { opName: action.type, opValue: action.payload },
        ],
        result: state.result / action.payload,
      };
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
const createMultiplyAction = payload => ({ type: MULTIPLY_ACTION, payload });
const createDivideAction = payload => ({ type: DIVIDE_ACTION, payload });


// Lab Exercise

// 1. Create a Calc Tool component similar to the one I will draw on the board. The component should support multiply, divide, add and subtract

// 2. The component should display the current result and an input for collecting a new operand. When a operator button is clicked, the result should be updated.

// 3. Ensure it works.

const CalcTool = ({ result, history, onAdd, onSubtract, onMultiply, onDivide }) => {

  const [ input, setInput ] = useState(0);

  return <form>
    <div>Result: {result}</div>
    <div>Input: <input type="number" name="input" value={input} onChange={(e) => setInput(Number(e.target.value))} /></div>

    <button type="button" onClick={() => onAdd(input)}>+</button>
    <button type="button" onClick={() => onSubtract(input)}>-</button>
    <button type="button" onClick={() => onMultiply(input)}>*</button>
    <button type="button" onClick={() => onDivide(input)}>/</button>

    <ul>
      {history.map((h, i) => <li key={i}>{h.opName} {h.opValue}</li>)}
    </ul>
  </form>
};

const add = value => calcStore.dispatch(createAddAction(value));
const subtract = value => calcStore.dispatch(createSubtractAction(value));
const multiply = value => calcStore.dispatch(createMultiplyAction(value));
const divide = value => calcStore.dispatch(createDivideAction(value));

calcStore.subscribe(() => {
  ReactDOM.render(
    <CalcTool
      result={calcStore.getState().result}
      history={calcStore.getState().history}
      onAdd={add} onSubtract={subtract}
      onMultiply={multiply} onDivide={divide} />,
    document.querySelector('#root'),
  );
});

calcStore.dispatch(createAddAction(0));

// Lab Exercise

// 1. Discover the meaning and purpose of life.

// 2. Add a button to the Calc Tool with a label of 'Clear'.

// 3. When the 'Clear' button is clicked, change the result 0, clear the input field and clear the history.

// 4. On each row of the history entries, add a button with a label of 'X'. When the button is clicked, remove the history entry.

// 5. Ensure it all works!