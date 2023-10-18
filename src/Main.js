import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App'; // Importa tus componentes necesarios, como App y PerfilUsuario
import PerfilUsuario from './PerfilUsuario';
import './mainStyles.css'; 

function Main() {
  return (
    <Router>
        <div className="main-container">
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/perfil-usuario" component={PerfilUsuario} /> {/* Asegúrate de que la ruta coincida con lo que configuraste en SideNav.js */}
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
