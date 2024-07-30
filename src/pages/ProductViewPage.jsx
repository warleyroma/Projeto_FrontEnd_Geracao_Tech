import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ProductViewPage = () => {
  const { id } = useParams();

  // Dados de exemplo para exibir na página de visualização do produto
  const product = {
    id,
    name: "Nome do produto",
    images: [
      { src: "public/product-image-1.jpeg" },
      { src: "public/product-image-2.jpeg" },
    ],
    price: 200,
    priceDiscount: 149.9,
    description: "Descrição do produto",
    options: ["39", "41", "42"],
  };

  const recommendedProducts = [
    {
      name: "Nome do produto 1",
      image: "https://url.imagem/do/produto1.jpeg",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "Nome do produto 2",
      image: "https://url.imagem/do/produto2.jpeg",
      price: 49.9
    }
  ];

  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <Gallery images={product.images} showThumbs width="700px" height="570px" radius="4px" />
        <BuyBox
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          <ProductOptions options={product.options} shape="square" radius="4px" type="text" />
        </BuyBox>
      </div>
      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </Layout>
  );
};

export default ProductViewPage;
