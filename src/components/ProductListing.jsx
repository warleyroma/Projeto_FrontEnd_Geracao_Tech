// src/components/ProductListing.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../App.css';

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={`R$ ${product.price.toFixed(2)}`}
          priceDiscount={product.priceDiscount ? `R$ ${product.priceDiscount.toFixed(2)}` : null}
        />
      ))}
    </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number
    })
  ).isRequired
};

export default ProductListing;
