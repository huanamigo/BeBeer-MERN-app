import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { getPosts } from './actions/posts';
import { useAppDispatch } from './hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    dispatch(getPosts());
    console.log(currentId);
  }, [currentId, dispatch]);

  return (
    <div className={styles.container}>
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
