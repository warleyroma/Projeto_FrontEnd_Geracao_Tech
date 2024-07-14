// src/components/Footer.jsx
import React from 'react';
import Logo from './Logo';
import InfoSection from './InfoSection';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const informationData = [
    {
      title: "Informações",
      informations: [
        { text: "Sobre Drip Store", link: "/about" },
        { text: "Blog", link: "/blog" },
        // Adicione mais itens conforme necessário
      ]
    },
    {
      title: "Ajuda",
      informations: [
        { text: "FAQ", link: "/faq" },
        { text: "Suporte", link: "/support" },
        // Adicione mais itens conforme necessário
      ]
    }
    // Adicione mais seções conforme necessário
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-description">
          <Logo className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        {informationData.map((info, index) => (
          <InfoSection key={index} title={info.title} informations={info.informations} />
        ))}
      </div>
      <hr />
      <p>© {currentYear} Digital Store</p>
    </footer>
  );
};

export default Footer;
