import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = {
    result: {
      imageURL: 'imageURL',
      name: 'name',
    },
  };
  return (
    <div>
      <Link to="/">
        <h1>bebeer</h1>
      </Link>
      <div className={styles.profile}>
        {user ? (
          <div>
            <img src={user.result.imageURL} alt={user.result.name} />
            <p>{user.result.name}</p>
            <button>sign out</button>
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
