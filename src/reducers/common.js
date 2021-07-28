import UsersList from './data.json'
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,

  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  
  GET_LIST
} from '../constants/actionTypes';

const inState = {
  registeringUser: false,
  userRegSucc: null,
  userRegFailure: null,

  updateUser: false,
  updateUserSucc: null,
  updateUserFailure: null,

  usersList: UsersList
};

export default (state = inState, action) => {
  switch (action.type) {
      //register
      case REGISTER:
      return {
        ...state,
        registeringUser: true,
        userRegSucc: null,
        userRegFailure: null,
      };

      case REGISTER_SUCCESS:
      return {
        ...state,
        registeringUser: false,
        userRegSucc: action.payload,
        userRegFailure: null,
      };

      case REGISTER_FAILURE:
      return {
        ...state,
        registeringUser: false,
        userRegSucc: null,
        userRegFailure: action.payload,
      };

      //update
      case UPDATE_USER:
      return {
        ...state,
        updateUser: true,
        updateUserSucc: null,
        updateUserFailure: null,
      };

      case UPDATE_USER_SUCCESS:
      return {
        ...state,
       updateUser: false,
      updateUserSucc: action.payload,
      updateUserFailure: null,
      };

      case UPDATE_USER_FAILURE:
      return {
        ...state,
       updateUser: false,
        updateUserSucc: null,
        updateUserFailure: action.payload,
      };


      case GET_LIST:
      return {
        ...state,
        
      };
   
    default:
      return state;
  }
};
