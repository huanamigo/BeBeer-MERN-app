import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

interface IProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = ({ search, setSearch }: IProps) => {
  // const [tags, setTags] = useState(['']);
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const navigate = useNavigate();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      searchPost();
    }
  };

  const searchPost = () => {
    if (search.trim()) {
    } else {
      navigate('/');
    }
  };

  // const handleAddTags = (tag: string) => {
  //   setTags([...tags, tag]);
  // };

  // const handleDeleteTags = (tagToDelete: string) => {
  //   setTags(tags.filter((tag) => tag !== tagToDelete));
  // };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="sercz"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      {/* <input
        type="text"
        name="search"
        placeholder="sercz baj tags"
        onKeyDown={(e) => {
          if (e.key === ' ') {
            console.log((e.target as HTMLTextAreaElement).value.split(' '));
            setTags((e.target as HTMLTextAreaElement).value.split(' '));
          }
        }}
      /> */}
    </div>
  );
};

export default Search;
