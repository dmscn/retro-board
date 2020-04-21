import React, { useReducer } from 'react'

import authReducer, { authStore } from '@store/Auth'
import counterReducer, { counterStore } from '@store/Counter'
import StoreContext from '@store/config'

export default function Store({ children }) {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    counterStore
  )

  const [authState, authDispatch] = useReducer(authReducer, authStore)

  const triggerDispatches = action => {
    const dispatchs = [counterDispatch, authDispatch]
    dispatchs.forEach(dispatcher => dispatcher(action))
  }

  const combineReducers = {
    store: {
      ...counterState,
      ...authState,
    },
    dispatch: action => triggerDispatches(action),
  }

  return (
    <StoreContext.Provider value={combineReducers}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => React.useContext(StoreContext)
