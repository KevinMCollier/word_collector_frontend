/*
Overview:
This functional component manages the state and behavior of my login form.
-credentials is a state variable storing email and password
-setCredentials is a function that updates the credentials state
-useState initlizes credentials with an object containing an empty email and pw
-Next we call the login function from my useAuth custom hook

-handleChange updates the credentials state when an input is typed into the field
-this uses the name attribute of the input field to determine which part to update

-handleSubmit is called when the form is submitted
-we prevent a page reload with preventDefault

-We render the form in the return
*/

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
      await login(credentials);
      // Redirect to home page or show success message
      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      alert('Login failed. Please try again.');
      // Consider setting error state and displaying a message in the UI
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
