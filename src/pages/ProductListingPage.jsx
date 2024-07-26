// src/pages/ProductListingPage.jsx
import React from 'react';
import ProductListing from '../components/ProductListing';

const ProductListingPage = () => {
  const productsData = [
    {
      name: 'Nome do produto 1',
      image: 'public/product-thumb-1.png',
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: 'Nome do produto 2',
      image: 'public/product-thumb-2.png',
      price: 49.9
    },
    // Adicione mais produtos conforme necessário
  ];

  return (

      <div className="product-listing-page">
        <ProductListing products={productsData} />
      </div>

  );
};

export default ProductListingPage;
