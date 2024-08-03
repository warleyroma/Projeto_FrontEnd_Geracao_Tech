import React, { useState }  from 'react';


const styles = {
  
  tamanho: {
    display: 'flex',
    justifyContent: '',
    alignItems: 'left',
  },
  tamanhoOpcao: {
    width: '50px',
    height: '50px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0 10px',
  },
  tamanhoOpcaoSelecionada: {
    backgroundColor: '#ff00dd',
    color:'#ffffff'
  },

  cor: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'left',
  },
  corOpcao: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    cursor: 'pointer',
    margin: '0 10px',
  },
  corOpcaoSelecionada: {
    border: '2px solid #333',
  },
};

const cores = [
  { id: 1, nome: 'Azul', cor: '#007bff' },
  { id: 2, nome: 'Vermelho', cor: '#ff0000' },
  { id: 3, nome: 'Verde', cor: '#00ff00' },
  { id: 4, nome: 'Amarelo', cor: '#ffff00' },
];


const tamanhos = [
  { id: 1, nome: '39' },
  { id: 2, nome: '40' },
  { id: 3, nome: '41' },
  { id: 4, nome: '42' },
  { id: 5, nome: '43' },
];


const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, size, color, titledescription, children }) => {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState(null);

  const handleTamanhoChange = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  const handleCorChange = (cor) => {
    setCorSelecionada(cor);
  };
  return (
    <div style={{ width: '400px', padding: '20px', border: '1px solid var(--light-gray-2)', borderRadius: '4px' }}>
      <h1 style={{ fontSize: '32px', color: 'var(--dark-gray)' }}>{name}</h1>
      <p style={{ fontSize: '12px', color: 'var(--dark-gray-3)' }}>REF: {reference}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '14px', backgroundColor: 'var(--warning)', borderRadius: '4px', padding: '2px 4px', color: 'white' }}>{stars}</span>
        <img src="/src/assets/stars.png" alt="star icon" style={{ width: '14px', height: '14px', marginLeft: '5px' }} />
        <span style={{ fontSize: '14px', color: 'var(--light-gray)', marginLeft: '5px' }}>({rating})</span>
      </div>
      {priceDiscount ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '32px', color: 'var(--dark-gray-2)' }}>R$ {priceDiscount}</span>
          <span style={{ fontSize: '16px', color: 'var(--light-gray-2)', textDecoration: 'line-through', marginLeft: '10px' }}> {price}</span>
        </div>
      ) : (
        <span style={{ fontSize: '32px', color: 'var(--dark-gray-2)' }}> {price}</span>
      )}
      <p style={{ fontSize: '14px', color: 'var(--dark-gray-3)' }}>{titledescription}</p>
      <p style={{ fontSize: '14px', color: 'var(--dark-gray-2)' }}>{description}</p>
  

      <div style={styles.tamanho}>
        {tamanhos.map((tamanho) => (
          <div
            key={tamanho.id}
            style={{
              ...styles.tamanhoOpcao,
              ...(tamanhoSelecionado === tamanho.nome && styles.tamanhoOpcaoSelecionada),
            }}
            onClick={() => handleTamanhoChange(tamanho.nome)}
          >
            {tamanho.nome}
          </div>
        ))}
      </div>
      <div style={styles.cor}>
        {cores.map((cor) => (
          <div
            key={cor.id}
            style={{
              ...styles.corOpcao,
              backgroundColor: cor.cor,
              ...(corSelecionada === cor.nome && styles.corOpcaoSelecionada),
            }}
            onClick={() => handleCorChange(cor.nome)}
          />
        ))}
      </div>
      {children}
      <button style={{ backgroundColor: 'var(--warning)', color: 'white', fontSize: '16px', padding: '10px 20px', border: 'none', borderRadius: '4px', marginTop: '20px' }}>COMPRAR</button>
    </div>
  );
};

export default BuyBox;