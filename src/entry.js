import React from 'react';
import ReactDOM from 'react-dom';
import HotApp from './containers/HotApp';
import 'normalize.css';
import './styles.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.getElementById('root')
);
