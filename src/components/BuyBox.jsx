import React, { useState }  from 'react';


const styles = {
  
  tamanho: {
    display: 'flex',
    justifyContent: 'flex-start',
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
    margin: '20px 10px 10px 0',
  },
  tamanhoOpcaoSelecionada: {
    backgroundColor: "var(--primary)",
    color:'#ffffff'
  },

  cor: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'left',
  },
  corOpcao: {
    padding:'10px',
    width: '35px',
    height: '35px',
    borderRadius: '100%',
    cursor: 'pointer',
    margin: '20px 10px 10px 0',
  },
  corOpcaoSelecionada: {
    outline: '3px solid var(--primary)',
    outlineOffset: '2px',
  },
};

const cores = [
  { id: 1, nome: 'Azul', cor: 'var(--cor1)' },
  { id: 2, nome: 'Vermelho', cor: 'var(--cor2)' },
  { id: 3, nome: 'cinza', cor: 'var(--cor3)' },
  { id: 4, nome: 'azul2', cor: 'var(--cor4)' },
];


const tamanhos = [
  { id: 1, nome: '39' },
  { id: 2, nome: '40' },
  { id: 3, nome: '41' },
  { id: 4, nome: '42' },
  { id: 5, nome: '43' },
];


const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, subtitle, children }) => {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState(null);

  const handleTamanhoChange = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  const handleCorChange = (cor) => {
    setCorSelecionada(cor);
  };
  return (
    <div style={{ width: '400px', padding: '0 0 0 20px',  }}>
      <h1 style={{ fontSize: '32px', color: 'var(--dark-gray)', marginBottom: '10px' }}>{name}</h1>
      <p style={{ fontSize: '12px', color: 'var(--dark-gray-3)', marginBottom: '10px' }}>REF: {reference}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img src="/src/assets/stars.png" alt="star icon" style={{ marginRight: '5px' , marginBottom: '10px'}} />
        <span style={{ fontSize: '14px', backgroundColor: 'var(--warning)', borderRadius: '4px', padding: '2px 4px', color: 'white', marginBottom: '10px' }}>{stars}</span>
        
        <span style={{ fontSize: '14px', color: 'var(--light-gray)', marginLeft: '5px', marginBottom: '10px' }}>({rating} avaliações)</span>
      </div>
      {priceDiscount ? (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '32px', color: 'var(--dark-gray-2)' }}>R$ {priceDiscount}</span>
          <span style={{ fontSize: '16px', color: 'var(--light-gray-2)', textDecoration: 'line-through', marginLeft: '10px' }}> {price}</span>
        </div>
      ) : (
        <span style={{ fontSize: '32px', color: 'var(--dark-gray-2)' }}> {price}</span>
      )}
      <p style={{ fontSize: '14px', color: 'var(--dark-gray-3)', marginBottom: '10px' }}>{subtitle}</p>
      <p style={{ fontSize: '14px', color: 'var(--dark-gray-2)', marginBottom: '10px' }}>{description}</p>
  
      <p style={{ fontSize: '14px', color: 'var(--dark-gray-3)', marginBottom: '10px' }}>{subtitle}</p>
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
      <p style={{ fontSize: '14px', color: 'var(--dark-gray-3)', marginBottom: '10px' }}>{subtitle}</p>
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