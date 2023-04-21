import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';
// @ts-ignore
import FileBase from 'react-file-base64';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createPost, updatePost } from '../../actions/posts';
import { IPost } from '../../../interface';

interface IProps {
  currentId: string;
}

const Form = ({ currentId }: IProps) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    creator: '',
    tags: [''],
    selectedFile: '',
  });
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) =>
    currentId ? state.posts.find((p: IPost) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  };
  const clearForm = () => {};

  return (
    <div className={styles.container}>
      <form
        autoComplete="off"
        noValidate
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <h2>add a beer</h2>
        <label htmlFor="creator">
          Creator
          <input
            type="text"
            name="creator"
            id="creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </label>
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
              setPostData({ ...postData, tags: [e.target.value] })
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
        <button className={styles.submitButton} onClick={clearForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Form;
