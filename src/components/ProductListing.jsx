// src/components/ProductListing.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ProductListing = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <div key={index} onClick={() => navigate(`/products/${product.id}`)}>
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            priceDiscount={product.priceDiscount}
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