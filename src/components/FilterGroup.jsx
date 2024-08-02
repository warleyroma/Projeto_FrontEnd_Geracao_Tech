// src/components/FilterGroup.jsx
import React from 'react';
import '../App.css';

const FilterGroup = ({ title, subtitle, inputType, options }) => {
  return (
    <div className="filter-group">
      <h3 className="filter-group-title">{title}</h3>
      <h2 className="filter-group-subtitle">{subtitle}</h2>
      <hr className="filter-group-divider" />
      <ul className="filter-group-options">
        {options.map((option, index) => (
          <li key={index} className="filter-group-option">
            <input type={inputType} id={`option-${index}`} name="filter" value={option.value || option.text} />
            <label htmlFor={`option-${index}`}>{option.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;