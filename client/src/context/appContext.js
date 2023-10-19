import axios from 'axios'
import React, { useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = (children) => {
  const custumFetch = () => {
    return new Promise((resolve, reject) => {})
  }
  const custumFetch2 = () => {
    return new Promise((resolve, reject) => {})
  }

  return <AppContext.Provider value={(custumFetch, custumFetch2)}> {children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
