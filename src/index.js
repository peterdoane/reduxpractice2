import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Reverse from './containers/reverse';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Reverse />
  </Provider>
, document.getElementById('root'));
