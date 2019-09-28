import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CarTool } from '../components/CarTool';

import {
  createAppendCarAction,
  createReplaceCarAction,
  createDeleteCarAction,
  createEditCarAction,
  createCancelCarAction,
} from '../actions/carActions';

const mapStateToProps = state => {
  return {
    cars: state.cars,
    editCarId: state.editCarId,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onAppendCar: createAppendCarAction,
  onReplaceCar: createReplaceCarAction,
  onDeleteCar: createDeleteCarAction,
  onEditCar: createEditCarAction,
  onCancelCar: createCancelCarAction,
}, dispatch);


export const CarToolContainer = connect(mapStateToProps, mapDispatchToProps)(CarTool);

