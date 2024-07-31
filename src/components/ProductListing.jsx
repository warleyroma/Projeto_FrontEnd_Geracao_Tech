// src/components/ProductListing.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ProductListing = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <div key={index} onClick={() => handleProductClick(product.id)}>
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price.toString()}
            priceDiscount={product.priceDiscount ? product.priceDiscount.toString() : null}
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
