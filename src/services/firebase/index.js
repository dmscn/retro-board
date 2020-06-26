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

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

const BOARDS_COLLECTION = 'boards'
const USERS_COLLECTION = 'users'
const COLUMNS_COLLECTION = 'columns'
const CARDS_COLLECTION = 'cards'

const BoardsCollection = db.collection(BOARDS_COLLECTION)
const UsersCollection = db.collection(USERS_COLLECTION)

/*
 * Authentication methods
 */
export const subscribeAuthState = handler =>
  firebase.auth().onAuthStateChanged(handler)

export const signInUserWithGoogle = async () => {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  const { user } = await firebase.auth().signInWithPopup(googleAuthProvider)
  await UsersCollection.doc(user.uid).set({ ...user.providerData[0] })
  return user
}

export const getCurrentUser = () => firebase.auth().currentUser
export const getUserRef = () => UsersCollection.doc(getCurrentUser().uid)

export const signOut = () => firebase.auth().signOut()

/*
 * Collections methods
 */
export const subscribeToCollection = (collection, handler) =>
  collection.onSnapshot(snapshot => {
    const newRegisters = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))

    handler(newRegisters)
  })

/*
 * Cards methods
 */
export const subscribeColumnCards = (boardSlug, columnSlug, handler) => {
  const CardsCollection = BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .doc(columnSlug)
    .collection(CARDS_COLLECTION)
    .orderBy('createdAt')

  return subscribeToCollection(CardsCollection, handler)
}

export const addNewCardToBoardColumn = (boardSlug, columnSlug, card) =>
  BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .doc(columnSlug)
    .collection(CARDS_COLLECTION)
    .add({
      ...card,
      likedBy: [],
      labels: [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

export const removeCardFromBoardColumn = (boardSlug, columnSlug, cardSlug) =>
  BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .doc(columnSlug)
    .collection(CARDS_COLLECTION)
    .doc(cardSlug)
    .delete()

export const updateCardFromBoardColumn = (
  boardSlug,
  columnSlug,
  cardSlug,
  newData
) =>
  BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .doc(columnSlug)
    .collection(CARDS_COLLECTION)
    .doc(cardSlug)
    .update(newData)

export const addNewCardLabel = (boardSlug, columnSlug, cardSlug, label) =>
  updateCardFromBoardColumn(boardSlug, columnSlug, cardSlug, {
    labels: firebase.firestore.FieldValue.arrayUnion(label),
  })

export const likeCard = (boardSlug, columnSlug, cardSlug) =>
  updateCardFromBoardColumn(boardSlug, columnSlug, cardSlug, {
    likedBy: firebase.firestore.FieldValue.arrayUnion(getCurrentUser().uid),
  })

export const unlikeCard = (boardSlug, columnSlug, cardSlug) =>
  updateCardFromBoardColumn(boardSlug, columnSlug, cardSlug, {
    likedBy: firebase.firestore.FieldValue.arrayRemove(getCurrentUser().uid),
  })
/*
 * Columns methods
 */
export const subscribeBoardColumns = (boardSlug, handler) => {
  const ColumnCollection = BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .orderBy('createdAt')

  return subscribeToCollection(ColumnCollection, handler)
}

export const addNewColumnToBoard = (boardSlug, column) =>
  BoardsCollection.doc(boardSlug)
    .collection(COLUMNS_COLLECTION)
    .add({
      ...column,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

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
export const subscribeUserBoards = handler => {
  const UserBoardsCollections = BoardsCollection.where(
    'owner',
    '==',
    getUserRef()
  )
  return subscribeToCollection(UserBoardsCollections, handler)
}

export const subscribeToBoard = (boardId, handler) =>
  BoardsCollection.doc(boardId).onSnapshot(doc =>
    handler({
      id: doc.id,
      ...doc.data(),
    })
  )

export const getBoardById = id =>
  BoardsCollection.doc(id)
    .get()
    .then(doc => ({
      id: doc.id,
      ...doc.data(),
    }))

export const addNewBoard = async name => {
  const board = {
    name,
    owner: getUserRef(),
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  }

  const { id } = await BoardsCollection.add(board)

  const addColumn = column => addNewColumnToBoard(id, column)

  defaultColumns.forEach(addColumn)
  return id
}

export const removeBoardById = id => BoardsCollection.doc(id).delete()

export const updateBoardById = (id, board) =>
  BoardsCollection.doc(id).update(board)
