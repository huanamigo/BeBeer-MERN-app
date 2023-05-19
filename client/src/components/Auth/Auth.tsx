import React, { useState } from 'react';
import styles from './Auth.module.scss';
import Input from './Input/Input';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useAppDispatch } from '../../hooks';
import { AUTH } from '../../constants/actionTypes';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = () => {};

  const clear = () => {};

  return (
    <div className={styles.container}>
      <h1>AUTORYZACJA</h1>
      <div className={styles.wrapper}>
        <button>{isSignup ? 'sign up' : 'sign in'}</button>
        <form
          className={styles.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {isSignup && (
            <>
              <Input
                name="firstName"
                label="First Name"
                type="text"
                handleChange={handleChange}
              />
              <Input
                name="lastName"
                label="last Name"
                type="text"
                handleChange={handleChange}
              />
            </>
          )}
          <Input
            name="email"
            label="email"
            type="email"
            handleChange={handleChange}
          />
          <Input
            name="password"
            label="pass"
            type={showPassword ? 'text' : 'password'}
            handleChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            show password
          </button>
          {isSignup && (
            <>
              <Input
                name="confirmPassword"
                label="confirm pass"
                type={showPassword ? 'text' : 'password'}
                handleChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                show password
              </button>
            </>
          )}
          <br />
          <button>{isSignup ? 'sign up' : 'sign in'}</button>
          <br />
          <GoogleLogin
            onSuccess={(res) => {
              const result = res?.clientId;
              let decoded = null;
              if (res.credential) {
                decoded = jwtDecode(res.credential);
              }
              console.log(res);

              try {
                dispatch({ type: AUTH, data: { result, decoded } });

                navigate('/');
              } catch (error) {
                console.log(error);
              }
            }}
            onError={() => console.log('error')}
          />
          <button
            type="button"
            onClick={() => {
              clear();
              setIsSignup((prev) => !prev);
            }}
          >
            {isSignup ? 'already have an account?' : 'dont have an account?'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
