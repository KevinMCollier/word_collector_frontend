import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout;
