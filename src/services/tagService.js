const API_URL = 'http://localhost:3000/api/v1/tags';

const getAuthHeaders = (email, token) => ({
  'Content-Type': 'application/json',
  'X-User-Email': email,
  'X-User-Token': token
});

const fetchTags = async (email, token) => {
  try {
    const response = await fetch(API_URL, { headers: getAuthHeaders(email, token) });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const fetchedTags = await response.json();
    console.log("Fetched tags:", fetchedTags);
    return fetchedTags;
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};

const fetchTag = async (id, email, token) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { headers: getAuthHeaders(email, token) });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching tag with ID ${id}:`, error);
    throw error;
  }
};

const createTag = async (tagData, email, token) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: getAuthHeaders(email, token),
      body: JSON.stringify(tagData),
    });
    if (!response.ok) {
      throw new Error('Error creating tag');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating tag:', error);
    throw error;
  }
};

const updateTag = async (id, tagData, email, token) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(email, token),
      body: JSON.stringify(tagData),
    });
    if (!response.ok) {
      throw new Error('Error updating tag');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating tag with ID ${id}:`, error);
    throw error;
  }
};

const deleteTag = async (id, email, token) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(email, token),
    });
    if (!response.ok) {
      throw new Error('Error deleting tag');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting tag with ID ${id}:`, error);
    throw error;
  }
};

export {
  fetchTags,
  fetchTag,
  createTag,
  updateTag,
  deleteTag
};
