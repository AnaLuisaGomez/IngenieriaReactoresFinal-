import React from 'react'
import Option from './Option'
import { useNavigate } from 'react-router-dom'
import velocidadImg from '../images/velocidad.jpeg';
import calculoImg from '../images/calculo.png';

export const Metodos = () => {
    
  const options = [
      { title: 'Velocidad de Reacción', image: velocidadImg, page:'../VelMetodos'},
      { title: 'Cálculo de Reactores', image: calculoImg, page: ''},
  ]
  const navigate = useNavigate()
  return (
    <div className="App">
      

      <div className="container-fluid">
        <div className="row">
          &nbsp;
        </div>
        <div className="row">
          &nbsp;
        </div>  
        <div className="row">
          <div className="col-sm"></div>
          {
            options.map((option) => <div className="col-sm"><Option title={option.title} image={option.image} page={option.page}/></div>)
          }
          <div className="col-sm"></div>
        </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
    </div>
  )
}
