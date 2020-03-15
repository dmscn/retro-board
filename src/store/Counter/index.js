export const counterStore = {
  counter: 0,
}

export const COUNTER_INC = 'COUNTER_INC'
export const COUNTER_DEC = 'COUNTER_DEC'

export const IncrementCounter = () => ({
  type: COUNTER_INC,
})

export const DecrementCounter = () => ({
  type: COUNTER_DEC,
})

const actions = {
  [COUNTER_INC]: state => ({
    ...state,
    counter: state.counter + 1,
  }),
  [COUNTER_DEC]: state => ({
    ...state,
    counter: state.counter - 1,
  }),
}

export default function counterReducer(state = counterStore, action) {
  const handler = actions[action.type]
  return handler ? handler(state, action) : state
}
