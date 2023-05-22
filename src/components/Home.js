import React from 'react'
import { useNavigate } from 'react-router-dom';
import portada from '../images/portada.png';

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
    <div className="container mt-4">
    <div className="card" style={{width: '18rem;'}}>
      <img src={portada} class="mx-auto d-block" alt="Imagen de la tarjeta"  style={{height: "30rem", width: "30rem"}}/>
      <div className="card-body">
        <h5 className="card-title">Ingeniería de Reactores</h5>
        <br/>
        <h6>Integrantes</h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Coronel Salas Juan Carlos</li>
          <li className="list-group-item">Gomez Garrido Ana Luisa</li>
          <li className="list-group-item">Rodríguez Zavala Karen</li>
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => navigate('metodos')}>Iniciar</button>
      </div>
    </div>
  </div>
    </div>

  );
}
