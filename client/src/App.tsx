import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_API_TOKEN } from './dev';

const App = () => {
  return (
    <div className={styles.container}>
      <GoogleOAuthProvider clientId={`${GOOGLE_API_TOKEN}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
