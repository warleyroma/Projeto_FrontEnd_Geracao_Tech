// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      {priceDiscount ? (
        <div className="price-container">
          <span className="product-price original-price">{price}</span>
          <span className="product-price discounted-price">{priceDiscount}</span>
        </div>
      ) : (
        <span className="product-price">{price}</span>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string
};

export default ProductCard;
