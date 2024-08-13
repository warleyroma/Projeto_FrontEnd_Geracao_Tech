// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/ProductCard.css'; 

const ProductCard = ({ id, name, imagem, price, priceDiscount, subtitle, description, subtitle_tam, subtitle_cor, images_galery  }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={imagem} alt={name} className="imagem" />
      </Link>
      <div className="name">{name}</div>
      
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
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number
};

export default ProductCard;