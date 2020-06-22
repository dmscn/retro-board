import React from 'react'
import { subscribeAuthState } from '@services/firebase'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)
  const [initialized, setInitialized] = React.useState(false)

  React.useLayoutEffect(() => {
    const unsubscribe = subscribeAuthState(user => {
      setUser(user)
      setInitialized(true)
    })
    return () => unsubscribe()
  }, [])

  const contextValues = {
    user,
    initialized,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)
