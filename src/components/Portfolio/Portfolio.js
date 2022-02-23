import React from 'react'
import Imagen from '../../images/portfolio.jpg'
import './portfolio.css'

export default function Portfolio() {
  return (
    <div className="contenedor">
      <h1 className="tituloPort">
        <span>Portfolio</span>
        <a href="https://pauvalqui.github.io/DWEC-PROY1-Valenzuela_Quintero_Paula/" className='EnlaceImg' target="_blank"><img src={Imagen} alt="" ></img></a>
      </h1>
    </div>
  )
}
