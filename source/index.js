import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Application from './Application';

const store = createStore(Application);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('application')
);
