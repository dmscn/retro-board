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

const BOARDS_COLLECTION = 'boards'
const USERS_COLLECTION = 'users'
const COLUMNS_COLLECTION = 'columns'

const BoardsCollection = db.collection(BOARDS_COLLECTION)
const UsersCollection = db.collection(USERS_COLLECTION)
// const CARDS_COLLECTIONS = 'collections'

/*
 * Authentication methods
 */
export const signInUserWithGoogle = async () => {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  const { user } = await firebase.auth().signInWithPopup(googleAuthProvider)
  await UsersCollection.add(user)
  return user
}

export const getCurrentUser = () => firebase.auth().currentUser
export const getUserRef = () =>
  db.doc(`${USERS_COLLECTION}/${getCurrentUser().uid}`)

/*
 * Collections methods
 */
export const subscribeToCollection = (collection, callback) =>
  collection.onSnapshot(snapshot => {
    const newRegisters = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))

    callback(newRegisters)
  })

/*
 * Columns methods
 */
export const subscribeBoardColumns = (boardSlug, callback) => {
  const ColumnCollection = BoardsCollection.doc(boardSlug).collection(
    COLUMNS_COLLECTION
  )

  return subscribeToCollection(ColumnCollection, callback)
}

export const addNewColumnToBoard = (boardSlug, column) =>
  BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .add(column)

export const removeColumnFromBoard = (boardSlug, columnSlug) =>
  BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .doc(columnSlug)
    .delete()

/*
 * Board methods
 */
const defaultColumns = [
  { title: 'Went bad' },
  { title: 'Went well' },
  { title: 'Action points' },
]

export const getBoardById = id => BoardsCollection.doc(id).get()

export const addNewBoard = async name => {
  const board = {
    name,
    owner: getUserRef(),
  }

  const { id } = await BoardsCollection.add(board)

  const addColumn = column =>
    BoardsCollection.doc(id)
      .collection(COLUMNS_COLLECTION)
      .add(column)

  defaultColumns.forEach(addColumn)
  return id
}
