import React from 'react';
import './stylePerfil.css'; // Importa tus estilos CSS aquí

function PerfilUsuario() {
  return (
    <div className="main-container">
      <main className="profile-page">
        <section className="profile-header">
          <img src="imagperf/11.jpg" alt="Foto de perfil" />
          <h1>Nombre de Usuario</h1>
          <p>Descripción del usuario</p>
          <button>Editar perfil</button>
        </section>
        <section className="user-posts">
          <div className="post">
            <img src="imagperf/publi1.jpg" alt="Publicación 1" />
            <p>Descripción de la publicación</p>
          </div>
          <div className="post">
            <img src="imagperf/publi2.jpeg" alt="Publicación 2" />
            <p>Descripción de la publicación</p>
          </div>
          <div className="post">
            <img src="imagperf/publi2.jpeg" alt="Publicación 2" />
            <p>Descripción de la publicación</p>
          </div>
          <div className="post">
            <img src="imagperf/publi2.jpeg" alt="Publicación 2" />
            <p>Descripción de la publicación</p>
          </div>
          <div className="post">
            <img src="imagperf/publi2.jpeg" alt="Publicación 2" />
            <p>Descripción de la publicación</p>
          </div>
          <div className="post">
            <img src="imagperf/publi2.jpeg" alt="Publicación 2" />
            <p>Descripción de la publicación</p>
          </div>
          {/* Repite esta estructura para cada publicación */}
        </section>
      </main>
      <footer>
        {/* Coloca aquí el pie de página si lo tienes */}
      </footer>
    </div>
  );
}

export default PerfilUsuario;
