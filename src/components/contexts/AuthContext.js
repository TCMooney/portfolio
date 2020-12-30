import React, { useReducer, createContext } from 'react';
import axios from 'axios';

import AuthReducer from '../reducers/AuthReducer';

const initialState = {
  isAuthenticated: 'NOT_AUTHENTICATED',
  authError: ''
}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  async function logIn(client, success) {
    try {
      const res = await axios.post('https://api.devcamp.space/sessions', client, { withCredentials: true })

      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: res.data
      })

      success();
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.data
      })
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated: state.isAuthenticated,
      logIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}


