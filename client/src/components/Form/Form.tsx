import React, { useState } from 'react';
import styles from './Form.module.scss';
import FileBase from 'react-file-base64';
import { useAppDispatch } from '../../hooks';
import { createPost } from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    creator: '',
    tags: '',
    selectedFile: '',
  });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createPost(postData));
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
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
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
