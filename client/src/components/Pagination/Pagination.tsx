import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <div>
      <Link to={`/posts?page=${1}`} />
    </div>
  );
};

export default Pagination;
