import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/index.jsx';
import HomePage from './pages/Home/index.jsx';
import { AuthProvider } from './context/AuthContext';
import { TagProvider } from './context/TagContext.jsx';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={
            <TagProvider>
              <HomePage />
            </TagProvider>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
