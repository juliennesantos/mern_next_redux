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

const initialState = {
  loggedIn: false,
  loggedOut: true,
  formData: {},
  username: null,
  showModal: false,
  modalMessage: null,
  error: null,
  isLoginVerified: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggedOut: false, 
        username: action.payload, 
        error: null,
        showModal: true,
        modalMessage: "Login Success!"
      }
      break
    case LOG_OUT_SUCCESS:
      return { ...state, 
        loggedIn: false, 
        loggedOut: true, 
        error: null,
        showModal: true,
        modalMessage: "You have successfully logged out."
      }
      break
    case LOG_IN_FAIL:
      return { ...state, loggedIn: false, loggedOut: true, error: action.payload }
      break
    case LOG_OUT_FAIL:
      return { ...state, 
        loggedIn: true, 
        loggedOut: false, 
        error: action.payload,
        showModal: true,
        modalMessage: "Log out failed."
      }
      break
    case ADD_TO_FORM:
      return { ...state, formData: { ...state.formData, ...action.payload }, error: null }
      break
    case TOGGLE_MODAL:
      return { ...state, showModal: action.payload, error: null }
      break
    case SET_MODAL_MESSAGE:
      return { ...state, modalMessage: action.payload, error: null }
      break
    case VERIFY_LOGIN_SUCCESS:
      return { ...state, isLoginVerified: action.payload, error: null }
      break
    case VERIFY_LOGIN_FAIL:
      console.log("failed")
      return { ...state, loggedIn: true, loggedOut: false, username: action.payload, error: null }
      break
    default:
      return state
      break
  }
}

export default reducer;