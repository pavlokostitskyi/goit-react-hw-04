import { useState } from "react"
import toast from 'react-hot-toast';
import css from "./SearchBar.module.css"
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.container}>
          <form onSubmit={handleSubmit}>
        <button className={css.SearchBtn} type="submit"><IoSearch /></button>
        <input className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;