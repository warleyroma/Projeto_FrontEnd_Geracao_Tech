// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/ProductCard.css'; 

const ProductCard = ({ id, name, image, price, priceDiscount, subtitle, description, subtitle_tam, subtitle_cor, images_galery  }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <h3 className="product-name">{name}</h3>
      
      <div className="product-price">
        {priceDiscount ? (
          <>
            <span className="original-price">${price}</span>
            <span className="discount-price"> ${priceDiscount}</span>
          </>
        ) : (
          <span className="price">${price}</span>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number
};

export default ProductCard;