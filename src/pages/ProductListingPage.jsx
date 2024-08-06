// src/pages/ProductListingPage.jsx
import React, { useState } from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import '../App.css';

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('price-asc');
  const [products, setProducts] = useState([
    { id: 1, name: "Nome do produto 1", image: "/public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 2, name: "Nome do produto 2", image: "/public/product-thumb-2.jpeg", price: 49.9 },
    { id: 3, name: "Nome do produto 3", image: "/public/product-thumb-3.jpeg", price: 245.9, priceDiscount: 149.9 },
    { id: 4, name: "Nome do produto 4", image: "/public/product-thumb-4.jpeg", price: 49.9 },
    { id: 5, name: "Nome do produto 5", image: "/public/product-thumb-5.jpeg", price: 49.9 },
    { id: 6, name: "Nome do produto 6", image: "/public/product-thumb-4.jpeg", price: 280, priceDiscount: 149.9 },
    { id: 7, name: "Nome do produto 7", image: "/public/product-thumb-1.jpeg", price: 350.9 },
    { id: 8, name: "Nome do produto 8", image: "/public/product-thumb-2.jpeg", price: 289, priceDiscount: 149.9 },
    { id: 9, name: "Nome do produto 9", image: "/public/product-thumb-1.jpeg", price: 49.9 },
    { id: 10, name: "Nome do produto 10", image: "/public/product-thumb-2.jpeg", price: 49.9 },
    { id: 11, name: "Nome do produto 11", image: "/public/product-thumb-5.jpeg", price: 255.9, priceDiscount: 149.9 },
    { id: 12, name: "Nome do produto 12", image: "/public/product-thumb-4.jpeg", price: 49.9 },
    { id: 13, name: "Nome do produto 13", image: "/public/product-thumb-5.jpeg", price: 49.9 },
    { id: 14, name: "Nome do produto 14", image: "/public/product-thumb-1.jpeg", price: 350.9, priceDiscount: 149.9 },
    { id: 15, name: "Nome do produto 15", image: "/public/product-thumb-2.jpeg", price: 49.9 },
  ]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);

  };

  return (
    <Section>
    <div className='section-productlisting'>
      <div className="product-listing-sort">
        <div className='resultados-produtos'><div>Resuldados para "Tênis"</div><div>- 15 produtos</div></div>
        <label htmlFor="sortOrder">Ordenar por</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
        </select>
      </div>
      <div className="product-listing-page">
      <div className="product-listing">
        <aside className="product-listing-filters">

          <FilterGroup
            title="Filtrar por"
            subtitle="Marka"
            inputType="checkbox"
            options={[
              { text: "Adiddas", value: "opt1" },
              { text: "Callenciaga", value: "opt2" },
              { text: "K-Swiss", value: "opt3" },
              { text: "Nike", value: "opt4" },
              { text: "Puma", value: "opt5" }
            ]}
          />
          <FilterGroup

            subtitle="Categoria"
            inputType="checkbox"
            options={[
              { text: "Esporte e lazer", value: "opt1" },
              { text: "Casual", value: "opt2" },
              { text: "Utilitário", value: "opt3" },
              { text: "Corrida", value: "opt4" },

            ]}
          />
          <FilterGroup

            subtitle="Genero"
            inputType="checkbox"
            options={[
              { text: "Masculino", value: "opt1" },
              { text: "Feminino", value: "opt2" },
              { text: "Unisex", value: "opt3" },

            ]}
          />
          <FilterGroup

            subtitle="Estado"
            inputType="radio"
            options={[
              { text: "Novo", value: "opt1" },
              { text: "Usado", value: "opt2" },

            ]}
          />
        </aside>
        <section className="product-listing-content">
          <Section title={`${products.length} produtos encontrados`} titleAlign="left">
            <ProductListing products={products} />
          </Section>
        </section>
      </div>
      </div>
    </div>
    </Section>
  );
};

export default ProductListingPage;
