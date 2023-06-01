import React, { useEffect, useState } from 'react';
import { IPost } from '../../../../interface';
import moment from 'moment';
import { useAppDispatch } from '../../../hooks';
import { deletePost, likePost } from '../../../actions/posts';
import { useLocation } from 'react-router';

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
  likes,
  name,
  creator,
}: IProps & IPost) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile') || '{}')
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile') || '{}'));
  }, [location]);

  return (
    <div>
      <p>title: {title}</p>
      <p>date: {moment(createdAt).fromNow()}</p>
      <p>tags: {tags.map((tag) => `#${tag} `)}</p>
      <p>message: {message}</p>
      <p>name: {name}</p>

      <button
        onClick={() => {
          if (_id) {
            dispatch(likePost(_id));
          }
        }}
      >
        kciuk {likes?.length}
      </button>
      {user?.result?._id === creator || user?.decoded?.sub === creator ? (
        <button
          onClick={() => {
            if (_id) {
              setCurrentId(_id);
            }
          }}
        >
          edit
        </button>
      ) : null}
      {user?.result?._id === creator || user?.decoded?.sub === creator ? (
        <button
          onClick={() => {
            if (_id) {
              dispatch(deletePost(_id));
            }
          }}
        >
          usun
        </button>
      ) : null}
    </div>
  );
};

export default Post;
