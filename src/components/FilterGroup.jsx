// src/components/FilterGroup.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const FilterGroup = ({ title, inputType, options, onChange }) => {
  return (
    <div className="filter-group">
      <h2 className="filter-title">{title}</h2>
      <hr className="filter-divider" />
      {options.map((option, index) => (
        <label key={index} className="filter-option">
          <input 
            type={inputType} 
            value={option.value || option.text} 
            onChange={onChange} 
            className="filter-input" 
          />
          {option.text}
        </label>
      ))}
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterGroup;
