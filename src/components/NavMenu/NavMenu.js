import React from 'react';
import './NavMenu.css'
import {NavLink} from 'react-router-dom';

export default function NavMenu(){

    return(
        <div className="navMenu">
            <ul>
                <li>
                    <NavLink 
                    to='/'
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/About'
                    >About</NavLink>
                </li>
                <li>
                    <NavLink to='/Academics'
                    >Academics</NavLink>
                </li>
                <li>
                    <NavLink to='/Portfolio'
                    >Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/Utility'
                    >Utility</NavLink>
                </li>
                <li>
                    <NavLink to='/Footer'
                    >Footer</NavLink>
                </li>
                <li>
                    <NavLink to='/Recuperacion'
                    >Recuperacion</NavLink>
                </li>
                
            </ul>
        </div>
    );
}