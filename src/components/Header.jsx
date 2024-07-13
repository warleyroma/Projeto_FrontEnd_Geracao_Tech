import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?filter=${searchTerm}`);
    }
  };
    return ( 
        <header>
      <Logo />
      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '5px', fontSize: '16px' }}
        />
        <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaSearch size={20} />
        </button>
      </form>
      
    </header>
     );
};
 
export default Header;