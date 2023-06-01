import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

interface IToken {
  email: string;
  exp: number;
  iat: number;
}

const Navbar = () => {
  const [localStorageProfile, setLocalStorageProfile] = useState(
    JSON.parse(localStorage.getItem('profile') || '{}')
  );
  const [user, setUser] = useState({
    name: '',
    picture: '',
    token: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setUser({
      name: '',
      picture: '',
      token: '',
    });
  };

  useEffect(() => {
    setLocalStorageProfile(JSON.parse(localStorage.getItem('profile') || '{}'));
  }, [location]);

  useEffect(() => {
    if (localStorageProfile.token) {
      setUser({
        name: localStorageProfile.result.name,
        picture: '',
        token: localStorageProfile.token,
      });
    } else if (localStorageProfile.decoded) {
      setUser({
        name: localStorageProfile.decoded.name,
        picture: localStorageProfile.decoded.picture,
        token: localStorageProfile.decoded.sub,
      });
    }

    const token = localStorageProfile?.token;

    if (token) {
      const decodedToken: IToken = decode(token);

      console.log(decodedToken.exp);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
        console.log('TOKEN EXPIRED');
      }
    }
  }, [localStorageProfile]);

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
              <button>sign in</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
