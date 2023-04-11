import React, { useEffect } from 'react';
import styles from './App.module.scss';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { getPosts } from './actions/posts';
import { useAppDispatch } from './hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className={styles.container}>
      <Posts />
      <Form />
    </div>
  );
};

export default App;
