import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { LOGOUT } from '../../constants/actionTypes';

const Navbar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage?.getItem('profile') || '{}')
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(user);

  useEffect(() => {
    // const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile') || '{}'));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setUser('');
  };

  return (
    <div>
      <Link to="/">
        <h1>bebeer</h1>
      </Link>

      <div className={styles.profile}>
        {user.name ? (
          <div>
            <img src={user.picture} alt={user.name} />
            <p>{user.name}</p>
            <button onClick={() => logout()}>sign out</button>
            asd
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
