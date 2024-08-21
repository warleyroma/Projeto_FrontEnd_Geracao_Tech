/*

Campo de busca com ícone de lupa: O código cria um formulário com um campo de texto e um botão de submit que contém o ícone de lupa (FaSearch).
Realizar busca ao ser clicado ou ao pressionar Enter: O formulário tem um evento onSubmit que chama a função handleSearch quando o botão de submit é clicado ou quando o usuário pressiona Enter.
Redirecionar para a rota /products com a query string do filtro: A função handleSearch verifica se o campo de busca não está vazio e, se não estiver, redireciona para a rota /products com a query string filter contendo o valor do campo de busca.
Além disso, o código também inclui outras funcionalidades, como:

Links para cadastro, login e navegação entre páginas
Um componente de carrinho de compras
Uma navegação com links para diferentes páginas



Área de redirecionamento: O código cria uma div com a classe redirect-area que contém os links para cadastro e login.
Link Cadastre-se: O código cria um link com o texto "Cadastre-se" que é renderizado em uma fonte de 16px na cor dark-gray-2 com uma sublinhado na mesma cor.
Link Entrar: O código cria um botão com o texto "Entrar" que tem uma aparência de botão, com um preenchimento na cor primary, largura de 114px por 40px de altura, bordas arrendondadas em 4px e texto em negrito na cor white e font de 14px.


*/ 
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Carrinho from './Carrinho';
import { FaSearch } from 'react-icons/fa';
import '../styles/components/Header.css';
import ModalCadastro from './ModalCadastro';

const Header = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 
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

  const openSignUpModal = () => {
    setIsModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsModalOpen(false);
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
        <Link to="/signup" className='signup'  onClick={openSignUpModal} >
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
      <ModalCadastro isOpen={isModalOpen} closeModal={closeSignUpModal} />
    </header>
  );
};

export default Header;