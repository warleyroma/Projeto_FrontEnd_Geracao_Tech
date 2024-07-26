// src/pages/ProductListingPage.jsx


// src/pages/ProductListingPage.jsx
import React, { useState } from 'react';
import Layout from './Layout'; 
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import productsData from '../data/products';

const ProductListingPage = () => {
  const [sortOption, setSortOption] = useState('');
  const [filters, setFilters] = useState([]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilters([...filters, value]);
    } else {
      setFilters(filters.filter((filter) => filter !== value));
    }
  };

  const sortProducts = (products, option) => {
    switch (option) {
      case 'low-to-high':
        return products.sort((a, b) => a.price - b.price);
      case 'high-to-low':
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const filterProducts = (products, filters) => {
    if (filters.length === 0) return products;
    return products.filter((product) => filters.includes(product.category));
  };

  const sortedProducts = sortProducts([...productsData], sortOption);
  const filteredProducts = filterProducts(sortedProducts, filters);

  const filterOptions = [
    { text: 'Opção 1', value: 'opt1' },
    { text: 'Opção 2' },
    { text: 'Opção 3', value: 'opt3' },
    { text: 'Opção 4' },
  ];

  return (
    <Layout>
      <div className="product-listing-page">
        <h1>Lista de Produtos</h1>
        <div className="filter-and-listing">
          <div className="filters">
            <label htmlFor="sort-select" className="sort-label">Ordenar por</label>
            <select 
              id="sort-select" 
              className="sort-select" 
              value={sortOption} 
              onChange={handleSortChange}
            >
              <option value="">Selecione</option>
              <option value="low-to-high">Menor preço</option>
              <option value="high-to-low">Maior preço</option>
            </select>
            <FilterGroup 
              title="Filtrar por" 
              inputType="checkbox" 
              options={filterOptions} 
              onChange={handleFilterChange}
            />
          </div>
          <Section title={`${filteredProducts.length} produtos encontrados`} titleAlign="left">
            <ProductListing products={filteredProducts} />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
