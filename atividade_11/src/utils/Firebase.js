import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebase_key from '../keys/firebase'


firebase.initializeApp(firebase_key)
firebase.firestore()

export default firebase