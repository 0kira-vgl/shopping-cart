import React from 'react';
import SearchBar from './searchBar/searchBar';

import './Header.css';
import CartButton from './cartButton/cartButton';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;
