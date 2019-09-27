import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { calcStore } from './calcStore';
import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryItemAction,
} from './actions/calcActions';
import { CalcTool } from './components/CalcTool';

// const mapStateToProps = state => {
//   return {
//     result: state.result,
//     history: state.history,
//     addCount: state.history.reduce( (sum, op) => op.opName === 'ADD' ? sum + 1 : sum, 0 ),
//     subtractCount: state.history.reduce( (sum, op) => op.opName === 'SUBTRACT' ? sum + 1 : sum, 0 ),
//     multiplyCount: state.history.reduce( (sum, op) => op.opName === 'MULTIPLY' ? sum + 1 : sum, 0 ),
//     divideCount: state.history.reduce( (sum, op) => op.opName === 'DIVIDE' ? sum + 1 : sum, 0 ),
//   };
// };

// const mapDispatchToProps = dispatch => bindActionCreators({
//   onAdd: createAddAction,
//   onSubtract: createSubtractAction,
//   onMultiply: createMultiplyAction,
//   onDivide: createDivideAction,
//   onClear: createClearAction,
//   onDeleteHistoryItem: createDeleteHistoryItemAction
// }, dispatch);


// const CalcToolContainer = connect(mapStateToProps, mapDispatchToProps)(CalcTool);

const CalcToolContainer = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);
  const dispatch = useDispatch();

  const stateProps = {
    result,
    history,
    addCount: history.reduce( (sum, op) => op.opName === 'ADD' ? sum + 1 : sum, 0 ),
    subtractCount: history.reduce( (sum, op) => op.opName === 'SUBTRACT' ? sum + 1 : sum, 0 ),
    multiplyCount: history.reduce( (sum, op) => op.opName === 'MULTIPLY' ? sum + 1 : sum, 0 ),
    divideCount: history.reduce( (sum, op) => op.opName === 'DIVIDE' ? sum + 1 : sum, 0 ),
  };

  const dispatchProps = useMemo(() => {
    console.log('ran dispatch props');
    return bindActionCreators({
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction,
      onClear: createClearAction,
      onDeleteHistoryItem: createDeleteHistoryItemAction
    }, dispatch);
      
  }, [ dispatch ]);

  return <CalcTool {...dispatchProps} {...stateProps} />;

};

// ReactDOM.render(
//   <Provider store={calcStore}>
//     <CalcToolContainer />
//   </Provider>,
//   document.querySelector('#root'),
// );
