import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk'
import reducer from './store/reducers/index' //chamando index.js
import firebase from './utils/Firebase'
import FirebaseContext from './utils/FirebaseContext';

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
      <FirebaseContext.Provider value={new firebase()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>,
    </ReactReduxFirebaseProvider>
  </Provider>
  , document.getElementById('root')
);
serviceWorker.unregister();