import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { getPosts } from '../../actions/posts';

interface IProps {
  page: number;
}

const Pagination = ({ page }: IProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [page]);

  return (
    <div>
      <Link to={`/posts?page=${page}`} />
    </div>
  );
};

export default Pagination;
