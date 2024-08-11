import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Carrinho from './Carrinho';
import { FaSearch } from 'react-icons/fa';
/*import '../App.css';*/
import '../styles/App.css'; 

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

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

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
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
        <Link to="/signup" className={isActive('/signup')}>
          Cadastre-se
        </Link>
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
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={isActive('/products')}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/categories" className={isActive('/categories')}>
              Categorias
            </Link>
          </li>
          <li>
            <Link to="/myorders" className={isActive('/myorders')}>
              Meus Pedidos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;