// src/pages/HomePage.jsx
import React from 'react';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const images = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

const featuredCollections = [
  { src: '/collection-1.png' },
  { src: '/collection-2.png' },
  { src: '/collection-3.png' }
];

const trendingProducts = [
  {
    name: "Produto 1",
    image: "/product-thumb-1.jpeg",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 2",
    image: "/product-thumb-2.jpeg",
    price: 99.9
  },
  {
    name: "Produto 3",
    image: "/product-thumb-3.jpeg",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 4",
    image: "/product-thumb-4.jpeg",
    price: 99.9
  },
  {
    name: "Produto 5",
    image: "/product-thumb-5.jpeg",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 6",
    image: "https://via.placeholder.com/292x321.png?text=Produto+6",
    price: 140,
    priceDiscount: 70.9
  },
  {
    name: "Produto 7",
    image: "https://via.placeholder.com/292x321.png?text=Produto+7",
    price: 205,
    priceDiscount: 100.9
  },
  {
    name: "Produto 8",
    image: "https://via.placeholder.com/292x321.png?text=Produto+8",
    price: 49.9
  }
];

const HomePage = () => {
  return (
    <Layout>
      <Gallery 
        className="custom-gallery" 
        width="1440px"
        height="681px"
        radius="10px" 
        showThumbs 
        images={images} 
      />
      <Section title="Coleções em Destaque" titleAlign="center">
        <div className="collections">
          {featuredCollections.map((collection, index) => (
            <img 
              key={index} 
              src={collection.src} 
              alt={`Coleção ${index + 1}`} 
              className="collection-image" 
            />
          ))}
        </div>
      </Section>
      <Section title="Produtos em Alta" titleAlign="left">
        <ProductListing products={trendingProducts} />
      </Section>
    </Layout>
  );
};

export default HomePage;
