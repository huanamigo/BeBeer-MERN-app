import React, { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch } from '../../hooks';
import { getPosts } from '../../actions/posts';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {
  const [currentId, setCurrentId] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
      <Pagination />
    </>
  );
};

export default Home;
