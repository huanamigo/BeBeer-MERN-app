import React from 'react';
import { IPost } from '../../../../interface';
import moment from 'moment';
import { useAppDispatch } from '../../../hooks';
import { deletePost } from '../../../actions/posts';

interface IProps {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>;
}

const Post = ({
  setCurrentId,
  title,
  createdAt,
  tags,
  message,
  _id,
  likeCount,
}: IProps & IPost) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{title}</p>
      <p>{moment(createdAt).fromNow()}</p>
      <p>{tags.map((tag) => `#${tag} `)}</p>
      <p>{message}</p>
      <button
        onClick={() => {
          if (_id) {
            setCurrentId(_id);
          }
        }}
      >
        edit
      </button>
      <button onClick={() => {}}>kciuk {likeCount}</button>
      <button
        onClick={() => {
          if (_id) {
            dispatch(deletePost(_id));
          }
        }}
      >
        usun
      </button>
    </div>
  );
};

export default Post;
