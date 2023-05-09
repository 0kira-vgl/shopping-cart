import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './cartButton.css';

function CartButton() {
  return (
    <button className="cart__button" type="button">
      <AiOutlineShoppingCart/>
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
