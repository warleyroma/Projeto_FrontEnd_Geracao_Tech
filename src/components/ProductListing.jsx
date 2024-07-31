// src/components/ProductListing.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((produto, index) => (
        <div key={index} onClick={() => handleProductClick(produto.id)}>
          <ProductCard
            key={produto.id}
            id={produto.id}
            name={produto.name}
            image={produto.image}
            price={produto.price}
            priceDiscount={produto.priceDiscount}
          />
        </div>
      ))}
    </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number
    })
  ).isRequired
};

export default ProductListing;