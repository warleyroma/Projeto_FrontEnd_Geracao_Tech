// src/components/Section.jsx
import React from 'react';
import '../App.css';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <div className="section">
      <div className={`section-header ${titleAlign}`}>
        <h2>{title}</h2>
        {link && (
          <a href={link.href} className="section-link">
            {link.text}
          </a>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default Section;
