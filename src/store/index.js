import React, { useReducer } from 'react'
import StoreContext from '@store/config'

import counterReducer, { counterStore } from './Counter'

export default function Store({ children }) {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    counterStore
  )

  const combineReducers = {
    store: {
      ...counterState,
    },
    dispatch: action => counterDispatch(action),
  }

  return (
    <StoreContext.Provider value={combineReducers}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => React.useContext(StoreContext)
