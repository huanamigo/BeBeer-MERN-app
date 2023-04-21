import React from 'react';
import { IPost } from '../../../../interface';
import moment from 'moment';

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
  console.log(likeCount);

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
      <button onClick={() => {}}>usun</button>
    </div>
  );
};

export default Post;
