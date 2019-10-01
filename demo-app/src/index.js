import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { carStore } from './stores/carStore';
import { CarToolContainer } from './containers/CarToolContainer';

ReactDOM.render(
  <Provider store={carStore}>
    <CarToolContainer />
  </Provider>,
  document.querySelector('#root'),
);