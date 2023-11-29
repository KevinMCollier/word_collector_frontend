// This file is responsible for handling the authentication state
import PropTypes from 'prop-types';
import { createContext, useReducer, useEffect } from 'react';

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

  // Initialize state from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if (token && user) {
      dispatch({ type: 'LOGIN', payload: { user, token }});
    }
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext }
