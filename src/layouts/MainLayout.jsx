import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout;
