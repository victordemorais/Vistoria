import axios from 'axios'
export const SET_REGISTER = 'SET_REGISTER'
export const DEFAULT_REGISTER = 'DEFAULT_REGISTER'
export const setRegister = payload => ({
  type: SET_REGISTER,
  payload,
})
export const defaultRegister = () => ({
  type: DEFAULT_REGISTER,
})
export const register =  values => {
  return dispatch => {
    console.log(values)
    axios
      .post(`http://198.199.87.49:5000/veiculo`, values, {
        headers: { Authorization: `Token ${values.token}` },
      })
      .then(response => {
        dispatch(defaultRegister())
      })
      .catch(err => console.log(err))
  }
}
