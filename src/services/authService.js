// hanlde API calls relating to authentication
const API_URL = 'http://localhost:3000';

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    const headers = response.headers;

    // Extract the necessary headers (access-token, client, uid, etc.)
    const authToken = headers.get('access-token');
    const client = headers.get('client');
    const uid = headers.get('uid');

    // Return both user data and the headers needed to persist the sesssion
    return {
      user: data.data, // update this depending on how user data is returned
      token: authToken,
      client,
      uid
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('client');
  localStorage.removeItem('uid');
}

// Add more methods to handle registration, password recovery, etc.
