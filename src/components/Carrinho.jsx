import React from 'react';
import carrinho from '../assets/minicart.svg'; // Certifique-se de que o caminho para a imagem está correto

const Carrinho = () => {
  return (
    <img src={carrinho} alt="Carrinho" width="25" height="30" />
  );
};

export default Carrinho;