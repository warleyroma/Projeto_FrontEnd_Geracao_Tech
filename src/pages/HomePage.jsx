// src/pages/HomePage.jsx
import React from 'react';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const images = [
  { src: '../public/collection-1.png' },
  { src: '../public/collection-2.png' },
  { src: '../public/collection-3.png' },

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


  

  // Adicione mais produtos conforme necessário
];

const trendingProducts = [
  {
    name: "Produto 1",
    image: "https://via.placeholder.com/292x321.png?text=Produto+1",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 2",
    image: "https://via.placeholder.com/292x321.png?text=Produto+2",
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
    image: "https://via.placeholder.com/292x321.png?text=Produto+5",
    price: 299,
    priceDiscount: 249.9
  },
  {
    name: "Produto 6",
    image: "https://via.placeholder.com/292x321.png?text=Produto+6",
    price: 99.9
  },

  {
    name: "Produto 7",
    image: "https://via.placeholder.com/292x321.png?text=Produto+7",
    price: 99.9
  },

  {
    name: "Produto 8",
    image: "https://via.placeholder.com/292x321.png?text=Produto+8",
    price: 99.9
  },
  // Adicione mais produtos conforme necessário
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
          <img src="/collection-1.png" alt="Coleção 1" className="collection-image" />
          <img src="/collection-2.png" alt="Coleção 2" className="collection-image" />
          <img src="/collection-3.png" alt="Coleção 3" className="collection-image" />
        </div>
      </Section>
      <Section title="Produtos em Alta" titleAlign="left">
        <ProductListing products={trendingProducts} />
      </Section>
    </Layout>
  );
};

export default HomePage;
