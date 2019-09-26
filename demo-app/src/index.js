import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';
const CLEAR_ACTION = 'CLEAR';

const resultReducer = (state = 0, action) => {
  switch(action.type) {
    case ADD_ACTION:
      return state + action.payload;
    case SUBTRACT_ACTION:
      return state - action.payload;
    case MULTIPLY_ACTION:
      return state * action.payload;
    case DIVIDE_ACTION:
      return state / action.payload;
    case CLEAR_ACTION:
      return 0;
    default:
      return state;
  }
};

const historyReducer = (state = [], action) => {

  if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
    return [
      ...state,
      { opName: action.type, opValue: action.payload },
    ];
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

};

const calcReducer = (state = { }, action) => {

  return {
    ...state,
    result: resultReducer(state.result, action),
    history: historyReducer(state.history, action),
  };
};

// const createStore = (reducerFn) => {

//   let currentState = undefined;
//   const subscribers = [];

//   return {
//     getState: () => currentState,
//     dispatch: (action) => {
//       currentState = reducerFn(currentState, action);
//       subscribers.forEach( callbackFn => callbackFn() );
//     },
//     subscribe: (callbackFn) => { subscribers.push(callbackFn); },
//   };

// };

const calcStore = createStore(calcReducer);

calcStore.subscribe(() => {
  console.log(calcStore.getState());
});

const createAddAction = payload => ({ type: ADD_ACTION, payload });
const createSubtractAction = payload => ({ type: SUBTRACT_ACTION, payload });
const createMultiplyAction = payload => ({ type: MULTIPLY_ACTION, payload });
const createDivideAction = payload => ({ type: DIVIDE_ACTION, payload });

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

    <table>
      <thead>
        <tr>
          <th>Add</th>
          <th>Subtract</th>
          <th>Multiply</th>
          <th>Divide</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{history.reduce( (sum, op) => op.opName === 'ADD' ? sum + 1 : sum, 0 )}</td>
          <td>{history.reduce( (sum, op) => op.opName === 'SUBTRACT' ? sum + 1 : sum, 0 )}</td>
          <td>{history.reduce( (sum, op) => op.opName === 'MULTIPLY' ? sum + 1 : sum, 0 )}</td>
          <td>{history.reduce( (sum, op) => op.opName === 'DIVIDE' ? sum + 1 : sum, 0 )}</td>
        </tr>
      </tbody>
    </table>
  </form>
};

// const bindActionCreators = (actionsMap, dispatch) => {
//   return Object.keys(actionsMap).reduce( (boundActionsMap, actionKey) => {
//     boundActionsMap[actionKey] = (...params) => dispatch(actionsMap[actionKey](...params));
//     return boundActionsMap;
//   } , {});
// };

const { add, subtract, multiply, divide } = bindActionCreators({
  add: createAddAction,
  subtract: createSubtractAction,
  multiply: createMultiplyAction,
  divide: createDivideAction,
}, calcStore.dispatch);

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
