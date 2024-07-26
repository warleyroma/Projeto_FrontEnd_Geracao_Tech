// src/pages/ProductListingPage.jsx
import React from 'react';
import Layout from '../components/Layout';
import ProductListing from '../components/ProductListing';
import products from '../data/products'; // Assumindo que você tenha um arquivo de dados com os produtos

const ProductListingPage = () => {
  return (
    <Layout>
      <div className="product-listing-page">
        <h1>Lista de Produtos</h1>
        <ProductListing products={products} />
      </div>
    </Layout>
  );
};

export default ProductListingPage;
