import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import applicationReducer from './reducer';
import Application from './application';

const store = createStore(applicationReducer);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('application')
);
