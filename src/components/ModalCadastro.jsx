import React, { useEffect, useState } from 'react';
import '../styles/components/ModalCadastro.css';

function ModalCadastro({ isOpen, closeModal }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const dados = {
      username,
      email,
      password,
    };

    fetch('http://localhost:3000/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  // Adiciona ou remove a classe que desabilita a rolagem
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Remove a classe quando o componente é desmontado
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null; // Se o modal não estiver aberto, não renderize nada

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Cadastre-se</h2>
        <div className='avisolgpd'>
          <img class="icon" src="https://ae01.alicdn.com/kf/Sa0be8b1ad53f401b8cfb2c5e3bc5373dG/22x26.png" alt="" srcset="" ></img>
          <p>Suas informações estão protegidas</p>
        </div>
        <form className='form' onSubmit={handleSubmit}>

          <input placeholder="Nome completo" type="text" id="username" name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)} required />


          <input placeholder="Email" type="email" id="email" name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} required />


          <input placeholder="Senha" type="password" id="password" name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default ModalCadastro;
