import React from 'react';
import '../styles/components/ModalCadastro.css'; 

function ModalCadastro({ isOpen, closeModal }) {
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderize nada

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Cadastre-se</h2>
        <form>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default ModalCadastro;
