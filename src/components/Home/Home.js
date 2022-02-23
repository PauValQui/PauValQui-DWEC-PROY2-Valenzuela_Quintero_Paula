import React from 'react'
import './Home.css'
import Imagen from "../../images/Peace.png"

export default function Home() {
  return (
    <div className="contenedor">
      <h1 className="tituloHome">
          <span>Hola, Bienvenidos al</span>
          <span>Portfolio de Paula </span>
          <img src={Imagen} alt=""></img>
      </h1>
    </div>
  )
}
