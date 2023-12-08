import { createContext, useState } from 'react';
import { fetchTags } from '../services/tagService';

export const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [tags, setTags] = useState([]);

  // Fetch tags from the server and update state
  const loadTags = async (token) => {
    try {
      const fetchedTags = await fetchTags(token);
      setTags(fetchedTags);
    } catch (error) {
      console.error('Error loading tags:', error);
    }
  };

  return (
    <TagContext.Provider value={{ tags, loadTags }}>
      {children}
    </TagContext.Provider>
  );
};
