import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ProductViewPage = () => {
  const { id } = useParams();

  // Simulação de carregamento de dados do produto
  const product = {
    id,
    name: "Nome do produto",
    reference: "123456",
    stars: 4.5,
    rating: 150,
    price: 200,
    priceDiscount: 149.9,
    description: "Descrição detalhada do produto.",
    images: [
      { src: "/public/product-image-1.jpeg" },
      { src: "/public/product-image-2.jpeg" },
      // Add more images as needed
    ],
    options: {
      sizes: ["39", "41", "42"],
      colors: ["#000", "#111", "#222"]
    }
  };

  const recommendedProducts = [
    {
      id: 1,
      name: "Nome do produto 1",
      image: "/public/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9
    },
    {
      id: 2,
      name: "Nome do produto 2",
      image: "/public/product-thumb-2.jpeg",
      price: 49.9
    }
  ];

  return (
    <div>
      <ProductDetails product={product} />
      <Section title="Produtos recomendados" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
  );
};

const ProductDetails = ({ product }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Gallery images={product.images} showThumbs width="700px" height="570px" radius="4px" />
      <BuyBox 
        name={product.name} 
        reference={product.reference}
        stars={product.stars}
        rating={product.rating}
        price={product.price}
        priceDiscount={product.priceDiscount}
        description={product.description}
      />
    </div>
  );
};

export default ProductViewPage;