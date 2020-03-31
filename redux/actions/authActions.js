import {
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAIL,
  ADD_TO_FORM,
  TOGGLE_MODAL,
  SET_MODAL_MESSAGE,
  VERIFY_LOGIN_SUCCESS,
  VERIFY_LOGIN_FAIL,
} from '../types'
import axios from 'axios'

export const login = (formData) => {
  console.log("LOGIN", formData)
  return (dispatch) => {
    axios.post(`/api/users/login`, formData,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      console.log(res)
      if (res.status !== 200) {
        dispatch({ type: LOG_IN_FAIL, payload: true })
      }
      return axios.post('http://localhost:7000/api/users/verify-login', {
        headers: {
          'Authorization': `Bearer ${res.data.token}`,
        }
      })
    })
    .then(res => {
      console.log(res)
      if (res.status !== 200) {
        dispatch({ type: LOG_IN_FAIL, payload: true })
      }
      dispatch({ type: LOG_IN_SUCCESS, payload: formData.username })
    })
    .catch(e => {
      console.log(e)
      dispatch({ type: LOG_IN_FAIL, payload: true })
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    axios.post('api/users/logout')
      .then(res => {
        if (res.status !== 200) {
          dispatch({ type: LOG_OUT_FAIL, payload: true })
        }
        dispatch({ type: LOG_OUT_SUCCESS })
      })
      .catch(e => {
        dispatch({ type: LOG_OUT_FAIL, payload: true })
      })
  }
}

export const addToForm = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_TO_FORM, payload: data })
  }
}

export const toggleModal = (isModalVisible) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_MODAL, payload: isModalVisible })
  }
}

export const setModalMessage = (input) => {
  return (dispatch) => {
    dispatch({ type: SET_MODAL_MESSAGE, payload: input })
  }
}

export const verifyLogin = (cookies) => dispatch => {
  axios.post('http://localhost:7000/api/users/verify-login', {
    headers: {
      'Authorization': `Bearer ${cookies ? cookies['bzaartraining_id_token'] : ""}`,
    }
  })
    .then(res => {
      if (res.status == 200) {
        dispatch({ type: VERIFY_LOGIN_SUCCESS, payload: res })
      }
    })
    .catch(e => dispatch({ type: VERIFY_LOGIN_FAIL, payload: e }))


  // return { username: resBody.username, loggedIn: true };
}