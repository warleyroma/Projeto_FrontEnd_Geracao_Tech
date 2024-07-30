// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ProductCard = ({ name, image, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <div className="product-price">
        {priceDiscount ? (
          <>
            <span className="original-price">{price}</span>
            <span className="discount-price">{priceDiscount}</span>
          </>
        ) : (
          <span className="price">{price}</span>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string
};

export default ProductCard;
