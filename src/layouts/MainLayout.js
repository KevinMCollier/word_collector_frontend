import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
}

export default MainLayout;
