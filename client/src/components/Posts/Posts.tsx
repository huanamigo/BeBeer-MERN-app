import React from 'react';
import Post from './Post/Post';

import { useAppSelector } from '../../hooks';

const Posts = () => {
  const posts = useAppSelector((state) => state.posts);

  console.log(posts);

  return (
    <div>
      <p>POSTS</p>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
