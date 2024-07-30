// src/components/InfoSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const InfoSection = ({ title, informations }) => {
  return (
    <div className="info-section">
      <h3>{title}</h3>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoSection;
