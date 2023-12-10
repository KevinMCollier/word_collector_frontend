import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useTag } from '../hooks/useTag'; // Adjust the import path as needed
import Tag from './Tag'; // Adjust the import path as needed

const TagsList = () => {
  const { tags, loadTags } = useTag();
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (state.token && state.user.email) {
      loadTags(state.user.email, state.token);
    }
  }, [state.token, state.user.email, loadTags]);

  console.log("Tags in TagsList component:", tags);

  return (
    <div className="tags-list">
      {tags.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default TagsList;
