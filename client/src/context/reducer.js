// import { initialState } from './appContext'
import {
  GET_FOOD_SUCCESS,
  GET_FOOD_BEGIN,
  GET_FOOD_ERROR,
  POST_FOOD_BEGIN,
  POST_FOOD_SUCCESS,
  POST_FOOD_ERROR,
} from './actions'
const reducer = (state, action) => {
  if (action.type === GET_FOOD_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === GET_FOOD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
    }
  }
  if (action.type === GET_FOOD_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === POST_FOOD_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === POST_FOOD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
    }
  }
  if (action.type === POST_FOOD_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  throw new Error(`no such action :${action.type}`)
}

export default reducer
