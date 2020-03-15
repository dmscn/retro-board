import React from 'react'
import { useStore } from '@store'
import { IncrementCounter, DecrementCounter } from '@store/Counter'

export default function Welcome() {
  const {
    store: { counter },
    dispatch,
  } = useStore()

  const dispatchCounterIncrement = () => dispatch(IncrementCounter())
  const dispatchCounterDecrement = () => dispatch(DecrementCounter())

  return (
    <div>
      Welcome Page, you counter is on {counter}
      <button onClick={dispatchCounterIncrement}>(+) Increment</button>
      <button onClick={dispatchCounterDecrement}>(-) Decrement</button>
    </div>
  )
}
