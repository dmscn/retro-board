import * as types from '@store/Auth/types'

export const authStore = {
  auth: {
    isLogged: false,
    user: {},
  },
}

const actions = {
  [types.LOGIN]: (state, { user }) => ({
    ...state,
    auth: {
      ...state.auth,
      isLogged: true,
      user,
    },
  }),
  [types.LOGOUT]: state => ({
    ...state,
    auth: {
      ...state.auth,
      isLogged: false,
      user: {},
    },
  }),
}

export default function authReducer(state = authStore, action) {
  const handler = actions[action.type]
  return handler ? handler(state, action) : state
}
