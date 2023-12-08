import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
  return (
    <div className="tag">
      {tag.name}
    </div>
  )
}

Tag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Tag;
