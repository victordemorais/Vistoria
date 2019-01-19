
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return { ...state, ...action.payload, complete: true }

    default:
      return state
  }
}
export default authReducer
