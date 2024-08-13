// src/components/ProductListing.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import '../styles/components/ProductListingPage.css';

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <div key={index} onClick={() => navigate(`/products/${product.id}`, { state: product })}>
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imagem={product.imagem}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number
    })
  ).isRequired
};

export default ProductList;