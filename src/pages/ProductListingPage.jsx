// src/pages/ProductListingPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

// Exemplo de dados de produtos
const products = [
  {
    id: 1,
    name: "Nome do produto 1",
    image: "https://url.imagem/do/produto1.jpeg",
    price: 200,
    priceDiscount: 149.9
  },
  {
    id: 2,
    name: "Nome do produto 2",
    image: "https://url.imagem/do/produto2.jpeg",
    price: 49.9
  }
];

const ProductListingPage = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListingPage;
