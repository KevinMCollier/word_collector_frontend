import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const LoginForm = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: ''});
  const { login } = useAuth();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(credentials);
      if (result) {
        // Login successful
        navigate('/home');
      } else {
        // Handle login failure
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
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
