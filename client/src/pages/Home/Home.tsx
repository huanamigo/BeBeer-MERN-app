import React, { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch } from '../../hooks';
import { getPosts } from '../../actions/posts';

const Home = () => {
  const [currentId, setCurrentId] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </>
  );
};

export default Home;
