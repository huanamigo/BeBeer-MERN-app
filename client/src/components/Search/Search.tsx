import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { getPostsBySearch } from '../../actions/posts';
import { useAppDispatch } from '../../hooks';

interface IProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: IProps) => {
  const [tags, setTags] = useState(['']);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchPost();
    }
  };

  const searchPost = () => {
    console.log(search);
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(
        `/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`
      );
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="sercz"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <input
        type="text"
        name="search"
        placeholder="sercz baj tags"
        onChange={(e) => {
          setTags(e.target.value.split(' '));
          console.log(tags);
        }}
      />
      <button onClick={searchPost}>sercz</button>
    </div>
  );
};

export default Search;
