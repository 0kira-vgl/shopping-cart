import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './searchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input 
        className="search__input"
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={ ({target}) => setSearchValue(target.value)}
        required/>
      { searchValue }
      <button className="search__button" type="submit">
        <BsSearch/>
      </button>
    </form>
  );
}


export default SearchBar;
