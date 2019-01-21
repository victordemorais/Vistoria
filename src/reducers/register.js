import { SET_REGISTER, DEFAULT_REGISTER } from '../actions/register'
const register = (state = {}, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return { ...state, ...action.payload }
    case DEFAULT_REGISTER:
      return { state: {} }
    default:
      return state
  }
}
export default register
