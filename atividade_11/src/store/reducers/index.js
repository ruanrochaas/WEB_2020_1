import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
/* ESTADO GERAL DA APLICAÇÃO */
export default combineReducers({
    firebaseReducer,
    firestoreReducer,
    authReducer
})
