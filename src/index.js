import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main'; // Importa tu componente principal
import './estilosinicio.css';

ReactDOM.render(
  <React.StrictMode>
    <Main /> {/* Renderiza tu componente principal (Main) */}
  </React.StrictMode>,
  document.getElementById('root')
);
