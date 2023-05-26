import React from 'react'
import { useNavigate } from 'react-router-dom';
import portada from '../images/portada.png';
import logo from './images/logo.png';
import fes from './images/fes.png';

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
    <div className="container mt-4">
    <div className="card" style={{width: '18rem;'}}>
      
      <div className="card-body">
        <div className='row'>
          <div className='col-sm-3'>
            <img src={logo} class="mx-auto d-block" alt="Imagen de la tarjeta"  style={{height: "10rem", width: "10rem"}}/>
          </div>
          <div className='col-sm-6'>
            <h3 className="card-title">Universidad Nacional Autónoma de México</h3><br/>
            <h3 className="card-title">Facultad de Estudios Superiores Zaragoza</h3><br/>
            
          </div>
          <div className='col-sm-2'>
            <img src={fes} class="mx-auto d-block" alt="Imagen de la tarjeta"  style={{height: "10rem", width: "10rem"}}/>
          </div>
        </div>
        
        <br/>
        <h3 className="card-title">Ingeniería Química</h3><br/>
            <h3 className="card-title">Ingeniería de Reactores</h3><br/>
        <h3>Profesor: Everardo Antonio Feria Hernández</h3><br/>
        <h3>Grupo: 4851</h3><br/>
        <h3>Integrantes:</h3><br/>
        <ul className="">
          <li className="list-group-item"><h3>Coronel Salas Juan Carlos</h3></li>
          <li className="list-group-item"></li>
          <li className="list-group-item"><h3>Gomez Garrido Ana Luisa</h3></li>
          <li className="list-group-item"></li>
          <li className="list-group-item"><h3>Rodríguez Zavala Karen</h3></li>
        </ul>        
        <br/>
        <div className='row'>
          <div className='col-sm-2'>&nbsp;</div>
          <div className='col-sm-4'>
            <h3 className='text-center'>Semestre 2023-2</h3><br/>
            <img src={portada} class="mx-auto d-block" alt="Imagen de la tarjeta"  />
          </div>
          <div className='col-sm-4'>&nbsp;</div>
        </div>
      </div>
      
      
      <div className='row'>&nbsp;</div>
    </div>
  </div>
    </div>

  );
}
