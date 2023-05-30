import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';
// @ts-ignore
import FileBase from 'react-file-base64';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createPost, updatePost } from '../../actions/posts';
import { IPost } from '../../../interface';
import { useLocation } from 'react-router-dom';

interface IProps {
  currentId: string;
  setCurrentId: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({ currentId, setCurrentId }: IProps) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: [''],
    selectedFile: '',
  });
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) =>
    currentId ? state.posts.find((p: IPost) => p._id === currentId) : null
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile') || '{}')
  );

  const location = useLocation();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }

    setUser(JSON.parse(localStorage.getItem('profile') || '{}'));
  }, [post, location]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      if (user.decoded) {
        dispatch(createPost({ ...postData, name: user?.decoded?.name }));
        console.log(user);
      } else {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
        console.log(user?.result?.name);
      }
    }
    clearForm();
  };

  if (!user?.result?.name && !user?.decoded?.name) {
    return <div>PLEASE SIGN IN TO ADD A BEER</div>;
  }

  const clearForm = () => {
    setCurrentId('');
    setPostData({
      title: '',
      message: '',
      tags: [''],
      selectedFile: '',
    });
  };

  return (
    <div className={styles.container}>
      <form
        autoComplete="off"
        noValidate
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <h2>{currentId ? 'Edit' : 'Add'} a beer</h2>

        <label htmlFor="title">
          title
          <input
            type="text"
            name="title"
            id="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </label>
        <label htmlFor="message">
          message
          <input
            type="text"
            name="message"
            id="message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </label>

        <label htmlFor="tags">
          tags
          <input
            type="text"
            name="tags"
            id="tags"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(',') })
            }
          />
        </label>
        <div className={styles.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
        <button
          className={styles.submitButton}
          onClick={(e) => {
            e.preventDefault();
            clearForm();
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Form;
