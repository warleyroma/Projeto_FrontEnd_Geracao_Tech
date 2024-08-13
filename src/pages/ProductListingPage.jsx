import React, { useState } from 'react';
import Section from '../components/Section';
import ProductList from '../components/ProductList';
import FilterGroup from '../components/FilterGroup';
import '../styles/components/ProductListingPage.css';
import { productsData } from '../data/products';

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('price-asc');
  const [products, setProducts] = useState(productsData);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);

  };

  return (

    <div className='section-productlisting'>
      <div className="product-listing-sort">
        <label htmlFor="sortOrder">Ordernar por:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
        </select>
        <div className='resultados-produtos'></div>

      </div>
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
            isFirst={true}
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
        <div className='produtosProductList'>
        <Section title='Resultados para "Tênis" - 15 produtos' >

          <ProductList products={productsData.slice(0, 9)} />

        </Section>
        </div>
      </div>

    </div>

  );
};

export default ProductListingPage;
