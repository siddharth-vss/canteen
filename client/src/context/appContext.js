/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useContext } from 'react'
import reducer from './reducer'
import {
  GET_FOOD_SUCCESS,
  GET_FOOD_BEGIN,
  GET_FOOD_ERROR,
  POST_FOOD_BEGIN,
  POST_FOOD_SUCCESS,
  POST_FOOD_ERROR,
} from './actions'
import axios from 'axios'

export const initialState = {}

const AppContext = React.createContext()
const AppProvider = (children) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const sp = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  })
  // response interceptor
  sp.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  // response interceptor
  sp.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        // logoutUser()
      }
      return Promise.reject(error)
    },
  )
  const postFood = async ({ Data, endPoint, alertText }) => {
    dispatch({ type: POST_FOOD_BEGIN })
    try {
      const { data } = await sp.post(`/${endPoint}`, Data)

      const { user, token, location } = data
      dispatch({
        type: POST_FOOD_SUCCESS,
        payload: { user, token, location, alertText },
      })
      // addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: POST_FOOD_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    // clearAlert()
  }
  const getFood = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: GET_FOOD_BEGIN })
    try {
      const { data } = await sp.post(`/${endPoint}`, currentUser)

      const { user, token, location } = data
      dispatch({
        type: GET_FOOD_SUCCESS,
        payload: { user, token, location, alertText },
      })
      // addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: GET_FOOD_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    // clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        postFood,
        getFood,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
