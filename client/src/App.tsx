import styles from './App.module.scss';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_API_TOKEN } from './dev';
import PostDetails from './components/PostDetails/PostDetails';
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile') || '{}')
  );
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile') || '{}'));
  }, [location]);

  return (
    <div className={styles.container}>
      <GoogleOAuthProvider clientId={`${GOOGLE_API_TOKEN}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/auth"
            element={!user.result ? <Auth /> : <Navigate to="/posts" replace />}
          />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
