import { useContext, useCallback, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import * as authService from '../services/authService';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  // Log in function
  const login = async (credentials) => {
    try {
      const { user, token, client, uid } = await authService.login(credentials);
      // Save the auth tokens to localStorage or sessionStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('client', client);
      localStorage.setItem('uid', uid);

      dispatch({type: 'LOGIN', payload: { user, token }});
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Log out function
 const logout = useCallback(() => {
  authService.logout();
  localStorage.removeItem('authToken');
  localStorage.removeItem('client');
  localStorage.removeItem('uid');
  localStorage.removeItem('user');
  dispatch({ type: 'LOGOUT' });
 }, [dispatch]);

  // Initialize the auth state from localStorage if present
  const initializeAuth = useCallback(() => {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      dispatch({type: 'LOGIN', payload: { user, token }});
    }
  }, [dispatch]);

  // Call initializeAuth when the component using this hook mounts
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return {
    isAuthenticated: state.isAuthenticated,
    login,
    logout
  };
};
