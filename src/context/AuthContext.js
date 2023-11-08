// This file is responsible for handling the authentication state
import PropTypes from 'prop-types';

// import React, { createContext, useReducer, useContext } from 'react';

// Initial state of the authentication context
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

// Create context
const AuthContext = createContext(initialState);

// Reducer to handle actions
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case 'LOGOUT':
      return {
        ...initialState
      };
      // handle other actions
      default:
        return state;
  }
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
