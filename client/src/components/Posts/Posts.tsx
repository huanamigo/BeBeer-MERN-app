import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.scss';
import { IPost } from '../../../interface';

import { useAppSelector } from '../../hooks';

interface IProps {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>;
}

const Posts = ({ setCurrentId }: IProps) => {
  const posts = useAppSelector((state) => state.posts);

  return (
    <>
      {!posts.length ? (
        <div>pusto</div>
      ) : (
        <div className={styles.container}>
          {posts.map((post: IPost) => (
            <Post
              key={post._id}
              title={post.title}
              message={post.message}
              name={post.name}
              tags={post.tags}
              selectedFile={post.selectedFile}
              createdAt={post.createdAt}
              likeCount={post.likeCount}
              _id={post._id}
              setCurrentId={setCurrentId}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
