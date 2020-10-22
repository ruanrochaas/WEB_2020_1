import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import reduxThunk from 'redux-thunk'
import reducer from './store/reducers/index' //chamando index.js
import firebase from './utils/Firebase'

const store = createStore(
  reducer,
  {},
  applyMiddleware(reduxThunk)
)
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  , document.getElementById('root')
);
serviceWorker.unregister();