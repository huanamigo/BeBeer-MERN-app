import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { LOGOUT } from '../../constants/actionTypes';

const Navbar = () => {
  const [localStorageProfile, setLocalStorageProfile] = useState(
    JSON.parse(localStorage.getItem('profile') || '{"result": ""}')
  );
  const [user, setUser] = useState({
    name: '',
    picture: '',
    token: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // const token = user?.token;
    setLocalStorageProfile(
      JSON.parse(localStorage.getItem('profile') || '{"result": ""}')
    );
  }, [location]);

  useEffect(() => {
    if (localStorageProfile.token) {
      console.log('TOKEN');
      setUser({
        name: localStorageProfile.result.name,
        picture: '',
        token: localStorageProfile.token,
      });
    } else if (localStorageProfile.decoded) {
      console.log('CGUJ');
      setUser({
        name: localStorageProfile.decoded.name,
        picture: localStorageProfile.decoded.picture,
        token: localStorageProfile.decoded.sub,
      });
    }
  }, [localStorageProfile]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setUser({
      name: '',
      picture: '',
      token: '',
    });
  };

  return (
    <div>
      <Link to="/">
        <h1>bebeer</h1>
      </Link>

      <div className={styles.profile}>
        {user.name !== '' ? (
          <div>
            <img src={user.picture} alt={user.name} />
            <p>{user.name}</p>
            <button onClick={() => logout()}>sign out</button>
          </div>
        ) : (
          <div>
            <Link to="/auth">
              <button onClick={() => console.log(user)}>sign in</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
