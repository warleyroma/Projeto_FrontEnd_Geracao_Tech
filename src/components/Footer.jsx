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
      title: "Informação",
      informations: [
        { text: "Sobre Drip Store", link: "/about" },
        { text: "Segurança", link: "/seguranca" },
        { text: "Wishlist", link: "/wishlist" },
        { text: "Blog", link: "/blog" },
        { text: "Trabalhe Conosco", link: "/trabalheconosco" },
        { text: "Meus Pedidos", link: "/meuspedidos" }
       
      ]
      
    },
    {
      title: "Categoria",
      informations: [
        { text: "Camisetas", link: "/camisetas" },
        { text: "Calças", link: "/calcas" },
        { text: "Bonés", link: "/bones" },
        { text: "Headphones", link: "/headphones" },
        { text: "Tênis", link: "/tenis" }
      ]
    },
    {
      title: "Contato",
      informations: [
        { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza- CE, 60150-161" },
        { text: "(85) 3051-3411" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-description">
          <Logo className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>

          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>

          </div>
        </div>
        <div className="infosection-content">
          {informationData.map((info, index) => (
            <InfoSection key={index} title={info.title} informations={info.informations} />
          ))}
        </div>
      </div>
      <hr />
      <p className='p-copyright'>© {currentYear} Digital Store</p>
    </footer>
  );
};

export default Footer;
