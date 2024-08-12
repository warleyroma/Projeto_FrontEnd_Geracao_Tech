import React from 'react';
import '../styles/components/Section.css'; 

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <div >
      <div className={`title ${titleAlign}`}>
        <div>{title}</div>
        {link && (
          <a href={link.href} className="link">
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
