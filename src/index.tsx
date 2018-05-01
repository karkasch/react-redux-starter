import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';
import { IAppState } from './app/store/state';
import { stateReducer } from './app/store/reducers';

let initialState: IAppState = {
  id: 0,
  userName: '',
  contacts: [],
  loadProgress: false
};

ReactDOM.render(
  <Provider store={createStore(stateReducer, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
