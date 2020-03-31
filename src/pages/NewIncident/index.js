import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import BeTheHeroService from '../../services/BeTheHeroService';

import './styles.css';

import LogoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  function handleCreateIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    BeTheHeroService.registerIncident({ data, ongId })
      .then(history.push('/profile'))
      .catch(console.error);
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para
            resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input
            placeholder="Título do caso"
            title={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            title={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder="Valor em reais"
            title={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            onClick={handleCreateIncident}
            type="submit"
            className="button"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
