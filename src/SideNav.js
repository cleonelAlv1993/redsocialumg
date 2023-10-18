import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import './sideNavStyles.css';

function SideNav() {
  return (
    <nav className="sidebar">
      <ul className="nav">
        <li>
          <Link to="/">Inicio</Link> {/* Utiliza Link para redirigir a la página de inicio */}
        </li>
        <li>
          <Link to="/perfil-usuario">Perfil</Link> {/* Utiliza Link para redirigir a la página de perfil */}
        </li>
        <li>
          <Link to="/cerrar-sesion">Cerrar Sesión</Link> {/* Utiliza Link para redirigir a la página de cierre de sesión */}
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
