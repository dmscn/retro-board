import React from 'react'
import {
  subscribeAuthState,
  signInUserWithGoogle,
  subscribeUserBoards,
} from '@services/firebase'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)
  const [initialized, setInitialized] = React.useState(false)
  const [userBoards, setUserBoards] = React.useState([])

  React.useLayoutEffect(() => {
    const unsubscribe = subscribeAuthState(user => {
      setUser(user)
      setInitialized(true)
    })
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    let unsubscribe
    if (user) unsubscribe = subscribeUserBoards(setUserBoards)

    return () => unsubscribe && unsubscribe()
  }, [user])

  const contextValues = {
    user,
    initialized,
    userBoards,
    googleSignIn: signInUserWithGoogle,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)
