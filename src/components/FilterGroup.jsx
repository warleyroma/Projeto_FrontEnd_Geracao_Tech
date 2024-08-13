// src/components/FilterGroup.jsx
import React from 'react';
import '../styles/components/FilterGroup.css';


const FilterGroup = ({ title, subtitle, inputType, options, isFirst  }) => {
  return (
    <div>
    {isFirst &&<h3 className="filter-group-title">{title}</h3>}
    <div className="filter-group">
      <h2 className="filter-group-subtitle">{subtitle}</h2>
      <ul className="filter-group-options">
        {options.map((option, index) => (
          <li key={index} className="filter-group-option">
            <input className='input-option' type={inputType} id={`option-${index}`} name="filter" value={option.value || option.text} />
            <label htmlFor={`option-${index}`}>{option.text}</label>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FilterGroup;