// src/pages/HomePage.jsx
import React from 'react';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductList from '../components/ProductList';
import ofertaEspecialImage from '../assets/oferta-especial.png';
import TenisImage from '../assets/tenis.png';
import BonesImage from '../assets/bones.png';
import CamisaImage from '../assets/camisa.png';
import HeadphoneImage from '../assets/headphone.png';
import CalcaImage from '../assets/calca.png';
import {productsData} from '../data/products';
import '../styles/pages/HomePage.css'; 

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
      <Section title="Coleções em Destaque" titleAlign="center">
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
          <img src={CamisaImage} alt="Camisetas" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Camisetas</a>
        </div>
        <div class="collections-featured-item">
          <img src={CalcaImage} alt="Calças" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Calças</a>
        </div>
        <div class="collections-featured-item">
          <img src={BonesImage} alt="Bonés" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Bonés</a>
        </div>
        <div class="collections-featured-item">
          <img src={HeadphoneImage} alt="Headphones" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Headphones</a>
        </div>
        <div class="collections-featured-item">
          <img src={TenisImage} alt="Tênis" class="collections-featured-image" />
          <a href="#" class="collections-featured-link">Tênis</a>
        </div>
      </Section>

      <Section title="Produtos em Alta" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
      <div className='alinhaprodutos'>
        <ProductList products={productsData.slice(0, 8)} />
      </div>
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