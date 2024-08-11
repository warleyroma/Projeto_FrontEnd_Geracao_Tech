import React, { useState } from 'react';
import '../styles/components/buybox.css';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, subtitle, subtitle_tam, subtitle_cor, children }) => {
  const [selectedStars, setSelectedStars] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState(null);

  const tamanhos = [
    { id: 1, nome: '39' },
    { id: 2, nome: '40' },
    { id: 3, nome: '41' },
    { id: 4, nome: '42' },
    { id: 5, nome: '43' },
  ];

  const cores = [
    { id: 1, nome: 'Azul', cor: 'var(--cor1)' },
    { id: 2, nome: 'Vermelho', cor: 'var(--cor2)' },
    { id: 3, nome: 'Cinza', cor: 'var(--cor3)' },
    { id: 4, nome: 'Azul2', cor: 'var(--cor4)' },
  ];

  const handleStarClick = (avaliacao) => {
    setSelectedStars(avaliacao);
  };

  const handleTamanhoChange = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  const handleCorChange = (cor) => {
    setCorSelecionada(cor);
  };

  return (
    <div className="buybox">
      <h1 className="title">{name}</h1>
      <p className="reference">Casual | Nike |  REF: {reference}</p>
      <div className='content-estrelas-rating-rating-count'>
      <div className="estrelas">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`estrela ${selectedStars > i ? 'selecionada' : ''}`}
            data-avaliacao={i + 1}
            onClick={() => handleStarClick(i + 1)}
          ></span>
        ))}
      </div>
      <div className="rating">
        <span>{stars}</span>
        <span>★</span></div>
      <span className="rating-count">({rating} avaliações)</span>
      </div>
      {priceDiscount ? (
        <div className="price">
          <p className='coin'>R$</p>
          <p className="price-discount">{priceDiscount}</p>
          <p className="price-original">{price}</p>
        </div>
      ) : (
        <span className="price">{price}</span>
      )}
       <p className="subtitle">{subtitle}</p>
      <p className="description">{description}</p>
      <p className="subtitle-tam">{subtitle_tam}</p>
      <div className="tamanho">
        {tamanhos.map((tamanho) => (
          <div
            key={tamanho.id}
            className={`tamanhoOpcao ${tamanhoSelecionado === tamanho.nome ? 'tamanhoOpcaoSelecionada' : ''}`}
            onClick={() => handleTamanhoChange(tamanho.nome)}
          >
            {tamanho.nome}
          </div>
        ))}
      </div>
      <p className="subtitle-cor">{subtitle_cor}</p>
      <div className="cor">
        {cores.map((cor) => (
          <div
            key={cor.id}
            className={`corOpcao ${corSelecionada === cor.nome ? 'corOpcaoSelecionada' : ''}`}
            style={{ backgroundColor: cor.cor }}
            onClick={() => handleCorChange(cor.nome)}
          />
        ))}
      </div>
      {children}
      <button className="botao-comprar">COMPRAR</button>
    </div>
  );
};

export default BuyBox;