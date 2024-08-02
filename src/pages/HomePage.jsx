// src/pages/HomePage.jsx
import React from 'react';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import ofertaEspecialImage from '../assets/oferta-especial.png';
import TenisImage from '../assets/Tenis.png';
import bonesImage from '../assets/bones.png';
import camisaImage from '../assets/camisa.png';
import headphoneImage from '../assets/headphone.png';
import '../App.css';

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
    id: 1,
    name: "Produto 1",
    image: "/product-thumb-1.jpeg",
    price: 299,
    priceDiscount: 249.9
  },
  {
    id: 2,
    name: "Produto 2",
    image: "/product-thumb-2.jpeg",
    price: 99.9
  },
  {
    id: 3,
    name: "Produto 3",
    image: "/product-thumb-3.jpeg",
    price: 299,
    priceDiscount: 249.9
  },
  {
    id: 4,
    name: "Produto 4",
    image: "/product-thumb-4.jpeg",
    price: 99.9
  },
  {
    id: 5,
    name: "Produto 5",
    image: "/product-thumb-5.jpeg",
    price: 299,
    priceDiscount: 249.9
  },
  {
    id: 6,
    name: "Produto 6",
    image: "https://via.placeholder.com/292x321.png?text=Produto+6",
    price: 140,
    priceDiscount: 70.9
  },
  {
    id: 7,
    name: "Produto 7",
    image: "https://via.placeholder.com/292x321.png?text=Produto+7",
    price: 205,
    priceDiscount: 100.9
  },
  {
    id: 8,
    name: "Produto 8",
    image: "https://via.placeholder.com/292x321.png?text=Produto+8",
    price: 49.9
  }
];

const ofertaEspecial = [
  { src: '../assets/oferta-especial.png' },
];

const HomePage = () => {
  return (
    <div className='div'>
      <Gallery
        className="custom-gallery"
        width="1440px"
        height="681px"
        radius="10px"
        showThumbs
        images={images}
      />
      <Section title="Coleções em Destaque" titleAlign="left">
        <div className="collections">
          {featuredCollections.map((collection, index) => (
            <div key={index} className="collection-item">
              <img
                src={collection.src}
                alt={`Coleção ${index + 1}`}
                className="collection-image"
              />
              <button className="buy-button">Comprar</button>
              <div className='discount'>30% OFF</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Coleções em Destaque" titleAlign="center" className="collections-featured">
        <div class="collections-featured-item">
          <img src={camisaImage} alt="Camisetas" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Camisetas</a>
        </div>
        <div class="collections-featured-item">
          <img src="https://via.placeholder.com/292x321.png?text=Calças" alt="Calças" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Calças</a>
        </div>
        <div class="collections-featured-item">
          <img src="https://via.placeholder.com/292x321.png?text=Bonés" alt="Bonés" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Bonés</a>
        </div>
        <div class="collections-featured-item">
          <img src="https://via.placeholder.com/292x321.png?text=Headphones" alt="Headphones" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Headphones</a>
        </div>
        <div class="collections-featured-item">
          <img src="https://via.placeholder.com/292x321.png?text=Tênis" alt="Tênis" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Tênis</a>
        </div>
      </Section>

      <Section title="Produtos em Alta" titleAlign="left">
        <ProductListing products={trendingProducts} />
      </Section>

      <Section>
        <div className='section-oferta-especial'>
          <div className='imagem-oferta-especial'>
            <img src={ofertaEspecialImage} alt="oferta" />
          </div>
          <div className='texto-oferta-especial'>
            <div>Oferta especial</div>
            <div>Air Jordan Edição de colecionador</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum illum laudantium omnis neque, ex, quia, necessitatibus odit minus possimus mollitia dolor. Nemo nihil totam voluptatum, aut debitis esse? Necessitatibus.</div>
            <button className='button-ver-oferta'>Ver Oferta</button>
          </div>
        </div>

      </Section>
    </div>
  );
};

export default HomePage;