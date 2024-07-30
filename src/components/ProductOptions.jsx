import React, { useState } from 'react';

const ProductOptions = ({ options, shape, radius, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => handleOptionClick(option)}
          style={{
            width: shape === 'circle' ? '31px' : '46px',
            height: shape === 'circle' ? '31px' : '46px',
            borderRadius: shape === 'circle' ? '50%' : radius,
            border: selectedOption === option ? '2px solid var(--primary-color)' : '1px solid var(--light-gray-2)',
            backgroundColor: type === 'color' ? option : 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: type === 'text' ? '24px' : '0',
            color: type === 'text' ? 'var(--dark-gray-2)' : 'transparent',
            margin: '5px',
            cursor: 'pointer'
          }}
        >
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
