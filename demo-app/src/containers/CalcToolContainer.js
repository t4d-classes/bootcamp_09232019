import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CalcTool } from '../components/CalcTool';

import {
  add,
  subtract,
  multiply,
  divide,
  clear,
  deleteHistoryItem,
  refreshHistory,
} from '../actions/calcActions';

const mapStateToProps = state => {
  return {
    result: state.result,
    history: state.history,
    addCount: state.history.reduce( (sum, op) => op.opName === 'ADD' ? sum + 1 : sum, 0 ),
    subtractCount: state.history.reduce( (sum, op) => op.opName === 'SUBTRACT' ? sum + 1 : sum, 0 ),
    multiplyCount: state.history.reduce( (sum, op) => op.opName === 'MULTIPLY' ? sum + 1 : sum, 0 ),
    divideCount: state.history.reduce( (sum, op) => op.opName === 'DIVIDE' ? sum + 1 : sum, 0 ),
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: add,
  onSubtract: subtract,
  onMultiply: multiply,
  onDivide: divide,
  onClear: clear,
  onDeleteHistoryItem: deleteHistoryItem,
  onRefreshHistory: refreshHistory,
}, dispatch);


export const CalcToolContainer = connect(mapStateToProps, mapDispatchToProps)(CalcTool);

