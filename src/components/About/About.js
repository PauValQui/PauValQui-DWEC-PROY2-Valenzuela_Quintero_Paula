import React from 'react';
import './About.css';
import Imagen from '../../images/Informatica.png'

export default function About(){
    return(
        <div className="contenedor">
            
            <div className="imagen">
                <img src={Imagen} alt="Imagen" />
            </div>
            <div className="info">
                <p> Soy una desarrolladora web junior. Me encanta el diseño y la creación de páginas web. </p>
            </div>
        </div>
    );
}