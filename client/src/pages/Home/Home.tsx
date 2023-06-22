import React, { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch } from '../../hooks';
import { getPosts } from '../../actions/posts';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import { useLocation } from 'react-router';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const [currentId, setCurrentId] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const query = useQuery();
  const searchQuery = query.get('searchQuery');
  const page = Number(query.get('page')) || 1;

  useEffect(() => {
    dispatch(getPosts(page));
  }, [currentId, dispatch]);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
      <Pagination page={page} />
    </>
  );
};

export default Home;
