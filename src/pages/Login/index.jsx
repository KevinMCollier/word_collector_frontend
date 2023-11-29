import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth } from '../../hooks/useAuth'
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <LoginForm />
  );
};

export default LoginPage;
