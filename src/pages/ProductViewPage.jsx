import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { productsData } from '../data/products';
import '../styles/pages/ProductViewPage.css'; 

const ProductViewPage = () => {
  const { id } = useParams();


  const product = {
    id,
    name: "Tenis Nike",
    reference: "123456",
    stars: 4.5,
    rating: 150,
    price: 200,
    priceDiscount: 149.9,
    subtitle: "Descrição do produto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
    subtitle_tam: "Tamanho",
    subtitle_cor: "Cor",
    images: [
      { src: "/public/produc-image-1.jpeg" },
      { src: "/public/produc-image-2.jpeg" },
      { src: "/public/produc-image-3.jpeg" },
      { src: "/public/produc-image-4.jpeg" },
      { src: "/public/produc-image-5.jpeg" },

    ],
    options: {
      sizes: ["39", "41", "42"],
      colors: ["#000", "#111", "#222"]
    }
  };

  return (
    <div>
      <ProductDetails product={product} />
      <Section title="Produtos relacionados" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
        <div className='alinhaprodutos'>
          <ProductListing products={productsData.slice(0, 4)} />
        </div>
      </Section>
    </div>
  );
};

const ProductDetails = ({ product }) => {
  return (

    <div className='section-buybox'>
      {/*<div className='title-section-buybox'>Home / Produtos / Tênis / Nike</div>*/}
    <Section title="Home / Produtos / Tênis / Nike" titleAlign='left'>
      <Gallery images={product.images} showThumbs width="700px" height="570px" radius="4px" />
      <BuyBox
        name={product.name}
        reference={product.reference}
        stars={product.stars}
        rating={product.rating}
        price={product.price}
        priceDiscount={product.priceDiscount}
        subtitle={product.subtitle}
        subtitle_tam={product.subtitle_tam}
        subtitle_cor={product.subtitle_cor}
        description={product.description}



      />
      </Section>
    </div>


  );
};

export default ProductViewPage;