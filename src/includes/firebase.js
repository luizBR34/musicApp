import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXfRBqm322FcQFPEZT-WTlMNAhqt9SNbs',
  authDomain: 'music-app-l40.firebaseapp.com',
  projectId: 'music-app-l40',
  storageBucket: 'music-app-l40.appspot.com',
  messagingSenderId: '718190660142',
  appId: '1:718190660142:web:ccf220307541d2c789adbf'
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
