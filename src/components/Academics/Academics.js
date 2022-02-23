import React from 'react'
import './Academics.css'

export default function Academics (){
    return (
      <div className="contenedor">
        <div className="contenedorIzq">
          <h1>Titulación</h1>
          <p className="NombreGrado">Grado Superior de Desarrollo de Aplicaciones Web</p>
          <p className="Localizacion">I.E.S. Rafael Alberti, Cádiz</p>
        </div>
        <div className="contenedorDer">
          <h1>Conocimientos Básicos</h1>
          <ul className="ListaLeng">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>JAVA</li>
            <li>PYTHON3</li>
            <li>SQL</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>
    )
}
