import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';
import Carrinho from './Carrinho';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?filter=${searchTerm}`);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <header>
      <Logo />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch size={20} />
        </button>
      </form>
      <div className="redirect-area">
        <a className="signup-link" href="#" onClick={handleSignUp}>
          Cadastre-se
        </a>
        <button className="login-button" onClick={handleLogin}>
          Entrar
        </button>
      </div>
      <div className="carrinho">
        <Carrinho />
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" className={window.location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={window.location.pathname === '/products' ? 'active' : ''}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/categorias" className={window.location.pathname === '/categorias' ? 'active' : ''}>
              Categorias
            </Link>
          </li>
          <li>
            <Link to="/meus-pedidos" className={window.location.pathname === '/meus-pedidos' ? 'active' : ''}>
              Meus Pedidos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;