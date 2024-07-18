// src/pages/HomePage.jsx
import React from 'react';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const images = [
  { src: 'https://via.placeholder.com/800x600.png?text=Image+1' },
  { src: 'https://via.placeholder.com/800x600.png?text=Image+2' },
  { src: 'https://via.placeholder.com/800x600.png?text=Image+3' },
  { src: 'https://via.placeholder.com/800x600.png?text=Image+4' },
  { src: 'https://via.placeholder.com/800x600.png?text=Image+5' }
];

const featuredCollections = [
  {
    name: "Produto 1",
    image: "https://via.placeholder.com/292x321.png?text=Produto+1",
    price: 200,
    priceDiscount: 149.9
  },
  {
    name: "Produto 2",
    image: "https://via.placeholder.com/292x321.png?text=Produto+2",
    price: 49.9
  },

  {
    name: "Produto 3",
    image: "https://via.placeholder.com/292x321.png?text=Produto+2",
    price: 49.9
  },


  {
    name: "Produto 4",
    image: "https://via.placeholder.com/292x321.png?text=Produto+2",
    price: 49.9
  },

  // Adicione mais produtos conforme necessário
];

const trendingProducts = [
  {
    name: "Produto 1",
    image: "https://via.placeholder.com/292x321.png?text=Produto+3",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 2",
    image: "https://via.placeholder.com/292x321.png?text=Produto+4",
    price: 99.9
  },

  {
    name: "Produto 3",
    image: "https://via.placeholder.com/292x321.png?text=Produto+3",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 4",
    image: "https://via.placeholder.com/292x321.png?text=Produto+4",
    price: 99.9
  },

  {
    name: "Produto 5",
    image: "https://via.placeholder.com/292x321.png?text=Produto+3",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 6",
    image: "https://via.placeholder.com/292x321.png?text=Produto+4",
    price: 99.9
  },
  // Adicione mais produtos conforme necessário
];

const HomePage = () => {
  return (
    <Layout>
      <Gallery 
        className="custom-gallery" 
        width="800px" 
        height="600px" 
        radius="10px" 
        showThumbs 
        images={images} 
      />
      <Section title="Coleções em Destaque" titleAlign="left">
        <ProductListing products={featuredCollections} />
      </Section>
      <Section title="Produtos em Alta" titleAlign="left">
        <ProductListing products={trendingProducts} />
      </Section>
    </Layout>
  );
};

export default HomePage;
