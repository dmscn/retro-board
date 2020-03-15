import * as types from '@store/Auth/types'

export const LogInUser = user => ({
  type: types.LOGIN,
  user,
})

export const LogOutUser = () => ({
  type: types.LOGOUT,
})
