import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyC4Fif-DpXabYJat_nMHfFY6j-Kokzqao8',
  authDomain: 'retro-board-dev.firebaseapp.com',
  databaseURL: 'https://retro-board-dev.firebaseio.com',
  projectId: 'retro-board-dev',
  storageBucket: 'retro-board-dev.appspot.com',
  messagingSenderId: '642287668416',
  appId: '1:642287668416:web:3b987f8fca5b06a1d1f125',
  measurementId: 'G-1TGPBLW7SS',
}

// Initialize Firebase
firebase.initializeApp(config)
firebase.analytics()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()

const getCollection = collection => db.collection(collection)

/*
 * Collections methods
 */

export const addToCollection = (collection, register) =>
  getCollection(collection).add(register)

export const subscribeToCollection = (collection, callback) =>
  getCollection(collection).onSnapshot(snapshot => {
    const newRegisters = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))

    callback(newRegisters)
  })

/*
 * Authentication methods
 */
export const signInUserWithGoogle = () =>
  firebase.auth().signInWithPopup(googleAuthProvider)

export const getCurrentUser = () => firebase.auth().currentUser
