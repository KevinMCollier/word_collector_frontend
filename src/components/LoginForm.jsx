import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth'; // Import useAuth
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import { useEffect } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth(); // Use useAuth hook
  const [credentials, setCredentials] = useState({ email: '', password: ''});

  console.log(isAuthenticated); // Add this line to debug

  useEffect(() => {
    if (isAuthenticated.isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated.isAuthenticated, navigate]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch (error) {
      // Handle any errors that might have occurred during login
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        name="email"
        type="email"
        placeholder="Enter your email"
        value={credentials.email}
        onChange={handleChange}
      />
      <InputField
        name="password"
        type="password"
        placeholder="Enter your password"
        value={credentials.password}
        onChange={handleChange}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
