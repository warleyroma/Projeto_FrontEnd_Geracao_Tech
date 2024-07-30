import React from 'react';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ExibePaginaProduto = () => {
  const product = {
    name: "Nome do produto",
    reference: "123456",
    stars: 4.5,
    rating: 150,
    price: 200,
    priceDiscount: 149.9,
    description: "Descrição detalhada do produto.",
    images: [
      {"src": "/public/product-image-1.png"},
      {"src": "/public/product-image-2.png"},
      // Add more images as needed
    ],
    options: {
      sizes: ["39", "41", "42"],
      colors: ["#000", "#111", "#222"]
    }
  };

  const recommendedProducts = [
    {
      name: "Nome do produto 1",
      image: "/public/product-thumb-1.png",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "Nome do produto 2",
      image: "/public/product-thumb-2.png",
      price: 49.9
    }
  ];

  return (
    <Layout>
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
        >
          <ProductOptions options={product.options.sizes} shape="square" radius="4px" type="text" />
          <ProductOptions options={product.options.colors} shape="circle" type="color" />
        </BuyBox>
      </div>
      <Section title="Produtos recomendados" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
        <ProductListing products={recommendedProducts} />
      </Section>
    </Layout>
  );
};

export default ExibePaginaProduto;
