import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebase_key from '../keys/firebase'


export default class Firebase{
    constructor(){
        firebase.initializeApp(firebase_key)
    }

    getFirestore(){
        return firebase.firestore()
    }
}