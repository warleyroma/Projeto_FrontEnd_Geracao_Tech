import React, { useState, useEffect } from 'react';
import '../styles/components/ModalCadastro.css';

function ModalCadastro({ isOpen, closeModal }) {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const userData = {
      firstname,
      surname,
      email,
      password,
    };

    fetch('http://localhost:3000/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Cadastre-se</h2>
        <div className="avisolgpd">
          <img className="icon" src="https://ae01.alicdn.com/kf/Sa0be8b1ad53f401b8cfb2c5e3bc5373dG/22x26.png" alt="" />
          <p>Suas informações estão protegidas</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Nome completo"
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
          />
          <input
            placeholder="Sobrenome"
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            required
          />
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Cadastrar'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ModalCadastro;