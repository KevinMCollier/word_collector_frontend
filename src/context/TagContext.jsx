import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchTags } from '../services/tagService';

export const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [tags, setTags] = useState([]);

  // Fetch tags from the server and update state
  const loadTags = async (email, token) => {
    try {
      const fetchedTags = await fetchTags(email, token);
      setTags(fetchedTags);
      console.log("Tags after setTags:", tags)
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

TagProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
