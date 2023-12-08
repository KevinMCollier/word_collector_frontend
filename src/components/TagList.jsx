import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useTag } from './useTag'; // Adjust the import path as needed
import Tag from './Tag'; // Adjust the import path as needed

const TagsList = () => {
  const { tags, loadTags } = useTag();
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (state.token) {
      loadTags(state.token);
    }
  }, [state.token, loadTags]);

  return (
    <div className="tags-list">
      {tags.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default TagsList;
