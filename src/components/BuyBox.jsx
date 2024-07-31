import React from 'react';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div style={{ width: '400px', padding: '20px', border: '1px solid var(--light-gray-2)', borderRadius: '4px' }}>
      <h1 style={{ fontSize: '32px', color: 'var(--dark-gray)' }}>{name}</h1>
      <p style={{ fontSize: '12px', color: 'var(--dark-gray-3)' }}>Ref: {reference}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '14px', backgroundColor: 'var(--warning)', borderRadius: '4px', padding: '2px 4px', color: 'white' }}>{stars}</span>
        <img src="/src/assets/star-icon.svg" alt="star icon" style={{ width: '14px', height: '14px', marginLeft: '5px' }} />
        <span style={{ fontSize: '14px', color: 'var(--light-gray)', marginLeft: '5px' }}>({rating})</span>
      </div>
      {priceDiscount ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '32px', color: 'var(--dark-gray-2)' }}>{priceDiscount}</span>
          <span style={{ fontSize: '16px', color: 'var(--light-gray-2)', textDecoration: 'line-through', marginLeft: '10px' }}>{price}</span>
        </div>
      ) : (
        <span style={{ fontSize: '32px', color: 'var(--dark-gray-2)' }}>{price}</span>
      )}
      <p style={{ fontSize: '14px', color: 'var(--dark-gray-2)' }}>{description}</p>
      {children}
      <button style={{ backgroundColor: 'var(--warning)', color: 'white', fontSize: '16px', padding: '10px 20px', border: 'none', borderRadius: '4px', marginTop: '20px' }}>COMPRAR</button>
    </div>
  );
};

export default BuyBox;