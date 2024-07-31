import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const Products = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const filter = query.get('filter');

  // Lógica para buscar e filtrar produtos com base no filtro
  // Por enquanto, vamos apenas exibir o valor do filtro
  return (
    <div>
      <h1>Produtos</h1>
      {filter && <p>Filtro: {filter}</p>}
      {/* Renderize a lista de produtos aqui */}
    </div>
  );
};

export default Products;