import { useContext, useCallback, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import * as authService from '../services/authService';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  // Log in function
  const login = async (credentials) => {
    try {
      const { user, token } = await authService.login(credentials);

      // Save the auth tokens to localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user)); // Ensure user object is stringified

      dispatch({ type: 'LOGIN', payload: { token, email: user.email } });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Log out function
  const logout = useCallback(() => {
    authService.logout();
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  }, [dispatch]);

  // Initialize the auth state from localStorage if present
  const initializeAuth = useCallback(() => {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('user')); // Parse the user object

    if (token && user) {
      dispatch({ type: 'LOGIN', payload: { token, email: user.email } });
    }
  }, [dispatch]);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    email: state.email,
    token: state.token,
    login,
    logout
  };
};
