import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CarTool } from '../components/CarTool';

import {
  refreshCars,
  appendCar,
  replaceCar,
  deleteCar,
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
  onRefreshCars: refreshCars,
  onAppendCar: appendCar,
  onReplaceCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: createEditCarAction,
  onCancelCar: createCancelCarAction,
}, dispatch);


export const CarToolContainer = connect(mapStateToProps, mapDispatchToProps)(CarTool);

