import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
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
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        <button type="submit" >
          <FaSearch size={20} />
        </button>
      </form>
      <div>
        <a href="#"  onClick={handleSignUp}>
          Cadastre-se
        </a>
        <button className='button' onClick={handleLogin}>
          Entrar
        </button>
      </div>
      
    </header>
     );
};
 
export default Header;