const API_URL = 'http://localhost:3000';

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/users/sign_in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: credentials }),
    });
    console.log('Response Status:', response.status);
    console.log('Response Data:', await response.clone().json()); // Use clone() to avoid consuming the response

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    // Check if the response contains a user and an authentication token
    if (!data || !data.authentication_token) {
      throw new Error('Invalid login credentials');
    }

    // Extract the authentication token and user data
    const authToken = data.authentication_token;
    const user = data;

    return { user, token: authToken };
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
