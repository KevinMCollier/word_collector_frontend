import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import * as authService from '../services/authService';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  // Log in function
  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      dispatch({type: 'LOGIN', payload: response });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Log out function
  const logout = () => {
    authService.logout();
    dispatch({ type: 'LOGOUT' });
  };

  return {
    ...state,
    login,
    logout
  };
};
