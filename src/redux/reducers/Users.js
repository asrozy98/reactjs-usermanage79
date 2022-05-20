import { GetUsers, ConfirmDelete, CreateUser, OnCreateUserForm, DeleteUser } from '../actions/Users'
const initialState = {
  loading: false,
  data: false,
  message: false,
  error: false,
  userCreate: {
    name: '',
    username: '',
    password: '',
  },
  userDelete: {
    show: false,
    userData: null,
  },
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case GetUsers:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
        error: action.payload.error,
      }
    case DeleteUser:
      return {
        ...state,
        loading: action.payload.loading,
        message: action.payload.message,
        error: action.payload.error,
      }
    case OnCreateUserForm:
      return {
        ...state,
        userCreate: {
          ...state.userCreate,
          [action.payload.field]: action.payload.value,
        },
        loading: action.payload.loading,
        message: action.payload.message,
        error: action.payload.error,
      }
    case CreateUser:
      console.log('create user:', action)
      return {
        ...state,
        userCreate: {
          ...state.userCreate,
          name: action.payload.name,
          username: action.payload.username,
          password: action.payload.password,
        },
        loading: action.payload.loading,
        message: action.payload.message,
        error: action.payload.error,
      }
    case ConfirmDelete:
      return {
        ...state,
        userDelete: {
          show: action.payload.show,
          userData: action.payload.userData,
        },
      }
    default:
      return state
  }
}

export default users
