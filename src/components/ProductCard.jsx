// src/components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, name, image, price, priceDiscount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{priceDiscount ? <span>${priceDiscount}</span> : <span>${price}</span>}</p>
      {priceDiscount && <p><strike>${price}</strike></p>}
    </div>
  );
};

export default ProductCard;
