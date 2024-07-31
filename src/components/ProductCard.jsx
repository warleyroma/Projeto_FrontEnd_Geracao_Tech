// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ProductCard = ({ id, name, image, price, priceDiscount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string
};

export default ProductCard;
