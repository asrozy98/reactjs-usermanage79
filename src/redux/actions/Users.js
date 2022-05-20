import axios from 'axios'

export const GetUsers = 'GET_USERS'
export const DeleteUser = 'DELETE_USER'
export const CreateUser = 'CREATE_USER'
export const OnCreateUserForm = 'ON_CREATE_USER_FORM'
export const ConfirmDelete = 'CONFIRM_DELETE'

export const getUsers = (page) => {
  return (dispatch) => {
    dispatch({
      type: GetUsers,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    })
    axios
      .get('http://localhost:8000/user', {
        params: {
          page: page,
          limit: 10,
        },
      })
      .then((res) => {
        dispatch({
          type: GetUsers,
          payload: {
            loading: false,
            data: res.data,
            message: res.data.message,
            error: false,
          },
        })
      })
      .catch((err) => {
        dispatch({
          type: GetUsers,
          payload: {
            loading: false,
            data: false,
            error: err.message,
          },
        })
      })
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch({
      type: DeleteUser,
      payload: {
        loading: true,
        message: false,
        error: false,
      },
    })
    axios
      .delete('http://localhost:8000/user/' + id)
      .then((res) => {
        dispatch({
          type: DeleteUser,
          payload: {
            loading: false,
            message: res.message,
            error: false,
          },
        })
      })
      .catch((err) => {
        dispatch({
          type: DeleteUser,
          payload: {
            loading: false,
            message: false,
            error: err.message,
          },
        })
      })
  }
}

export const confirmDelete = (show, userData) => {
  return (dispatch) => {
    dispatch({
      type: ConfirmDelete,
      payload: {
        show: show,
        userData: userData,
      },
    })
  }
}

export const onCreateUserForm = (value, inputType) => {
  return (dispatch) => {
    dispatch({
      type: OnCreateUserForm,
      payload: {
        field: inputType,
        value,
      },
    })
  }
}

export const createUser = (user) => {
  return (dispatch) => {
    console.log(user)
    dispatch({
      type: CreateUser,
      payload: {
        loading: true,
        message: false,
        error: false,
      },
    })

    axios
      .post('http://localhost:8000/user', {
        name: user.name,
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        console.log('log res:', res.data)
        dispatch({
          type: CreateUser,
          payload: {
            loading: false,
            message: res.data.message,
            error: false,
            name: '',
            username: '',
            password: '',
          },
        })
      })
      .catch((err) => {
        console.log('log err:', err)
        dispatch({
          type: CreateUser,
          payload: {
            loading: false,
            message: err.response.data.message ?? err.message,
            error: err.response.data.error ?? false,
          },
        })
      })
  }
}
