import React from 'react';
import { Link } from 'react-router-dom';
import './editarPerfil.css'; // Importa tus estilos CSS aquí

function EditarPerfil() {
  return (
    <div className="container">
      <h1>Editar Perfil</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" placeholder="Tu apellido" />
        </div>
        <div className="form-group">
          <label htmlFor="des">Descripción</label>
          <input type="text" id="des" name="des" placeholder="Tu Descripción" />
        </div>

        <button type="submit">Guardar Cambios</button>
      </form>
      <p> 
      <Link to="/perfil-usuario">
            <button>Cancelar</button>
      </Link>
      </p>
    </div>
  );
}

export default EditarPerfil;