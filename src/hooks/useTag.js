import { useContext } from 'react';
import { TagContext } from '../context/TagContext';

export const useTag = () => {
  const context = useContext(TagContext);
  if (context === undefined) {
    throw new Error('useTag must be used within a TagProvider');
  }
  return context;
}
