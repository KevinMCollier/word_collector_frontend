const API_URL = 'http://localhost:3000';

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/users/sign_in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: credentials }),
    });

    console.log('Response Status:', response.status);

    const data = await response.json();
    console.log('Extracted Data:', data); // Log the extracted data

    if (!response.ok) {
      throw new Error('Login failed');
    }

    // Check if the response contains a user and an authentication token
    if (!data.user || !data.user.authentication_token) {
      throw new Error('Invalid login credentials');
    }

    // Extract the authentication token and user data
    const authToken = data.user.authentication_token;
    const userEmail = data.user.email;
    // Extract other user data as needed

    return { user: { email: userEmail }, token: authToken }; // Update as needed based on your requirements
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
