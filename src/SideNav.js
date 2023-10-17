import React from 'react';
import './sideNavStyles.css';

function SideNav() {
  return (
    <nav className="sidebar">
      <ul className="nav">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/perfil">Perfil</a>
        </li>
        <li>
          <a href="/cerrar-sesion">Cerrar Sesión</a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
