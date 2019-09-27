import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import { calcStore } from './calcStore';
import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryItemAction,
} from './actions/calcActions';
import { CalcTool } from './components/CalcTool';

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
  onAdd: createAddAction,
  onSubtract: createSubtractAction,
  onMultiply: createMultiplyAction,
  onDivide: createDivideAction,
  onClear: createClearAction,
  onDeleteHistoryItem: createDeleteHistoryItemAction
}, dispatch);

// const { Provider, Consumer } = React.createContext(null);

// const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {

//   return PresentationalComponent => {

//     class ContainerComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);
//       }

//       // creation
//       componentDidMount() {
//         this.storeUnsubscribe = this.props.store.subscribe(() => {
//           // when state has occured...
//           this.forceUpdate();
//         });
//       }

//       // destruction
//       componentWillUnmount() {
//         this.storeUnsubscribe();
//       }

//       render() {
//         const stateProps = mapStateToPropsFn(this.props.store.getState());
//         return <PresentationalComponent {...this.dispatchProps} {...stateProps} />;
//       }
//     }

//     // function which produces a component
//     return () => <Consumer>
//       {(value) => <ContainerComponent store={value} />}
//     </Consumer>;

//     // function which produces a component
//     // return ContainerComponent;
//   };

// };

// const createCalcToolContainer = connect(mapStateToProps, mapDispatchToProps);

const CalcToolContainer = connect(mapStateToProps, mapDispatchToProps)(CalcTool);

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);
