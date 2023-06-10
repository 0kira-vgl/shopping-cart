import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import './ProductCard.css';
                                                                                                    
function ProductCard({ data }) {
  const {title, thumbnail, price} = data;
  const { cartItems, setCartItems } = useContext(AppContext);
  const handleAddCart = () => {setCartItems([ ...cartItems, data ]);};

  return (
    <section className="product-card">
      <img className="card__image" src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product"/>

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button className="buttton__add-cart" onClick={handleAddCart} type="button">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
