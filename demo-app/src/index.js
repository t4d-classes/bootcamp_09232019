import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { calcStore } from './stores/calcStore';
import { CalcToolContainer } from './containers/CalcToolContainer';

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);
