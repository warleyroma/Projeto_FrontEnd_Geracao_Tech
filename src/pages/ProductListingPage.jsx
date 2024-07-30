// src/pages/ProductListingPage.jsx
import React, { useState } from 'react';
import Layout from './Layout';
import Section from '../components/Section';
import ProductList from '../components/ProductList';
import FilterGroup from '../components/FilterGroup';

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('price-asc');
  const [products, setProducts] = useState([
    { name: "Nome do produto 1", image: "/public/product-thumb-1.png", price: 200, priceDiscount: 149.9 },
    { name: "Nome do produto 2", image: "/public/product-thumb-2.png", price: 49.9 }
  ]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    // Implement sorting logic here
  };

  return (
    <Layout>
      <div className="product-listing">
        <aside className="product-listing-filters">
          <div className="product-listing-sort">
            <label htmlFor="sortOrder">Ordenar por</label>
            <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
            </select>
          </div>
          <FilterGroup 
            title="Filtrar por" 
            inputType="checkbox" 
            options={[
              { text: "Option 1", value: "opt1" },
              { text: "Option 2", value: "opt2" },
              { text: "Option 3", value: "opt3" },
              { text: "Option 4", value: "opt4" },
              { text: "Option 5", value: "opt5" }
            ]}
          />
          <FilterGroup 
            title="Outro filtro" 
            inputType="radio" 
            options={[
              { text: "Option 1", value: "opt1" },
              { text: "Option 2", value: "opt2" },
              { text: "Option 3", value: "opt3" },
              { text: "Option 4", value: "opt4" },
              { text: "Option 5", value: "opt5" }
            ]}
          />
        </aside>
        <section className="product-listing-content">
          <Section title={`${products.length} produtos encontrados`} titleAlign="left">
            <ProductList products={products} />
          </Section>
        </section>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
