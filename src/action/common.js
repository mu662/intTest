
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,

  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
  
} from '../constants/actionTypes';

//update action
const updateuser = () => ({
  type: UPDATE_USER,
})

const updateuserSuccess = data => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
})

const updateuserFail = error => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
})


export const actionUpdateUser = (body) => {
  return dispatch => {
    dispatch(updateuser());
    setTimeout(()=>{
		dispatch(updateuserSuccess({message: "User successfully updated."})) // dispatch
    },2000)
    // axios.post() // for request to server
      
  }
}


// rgister action
const register = () => ({
  type: REGISTER,
})

const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  payload: data,
})

const registerFail = error => ({
  type: REGISTER_FAILURE,
  payload: error,
})


export const actionRegisterUser = (body) => {
  return dispatch => {
    dispatch(register());
    setTimeout(()=>{
		dispatch(registerSuccess({message: "User successfully registered."})) // dispatch
    },2000)
    // axios.post() // for request to server
      
  }
}
