import React from 'react';

function Post({ username, image, description }) {
  return (
    <div className="post">
      <img src={image} alt="Publicación" />
      <div className="post-description">
        <span className="post-username">{username}</span>
        {description}
      </div>
      <div className="post-icons">
        <div className="like-icon">
          {/* Icono de "Me gusta" */}
          <i className="far fa-heart"></i>
        </div>
        <div className="comment-icon">
          {/* Icono de "Comentar" */}
          <i className="far fa-comment"></i>
        </div>
        <div className="send-icon">
          {/* Icono de "Enviar" */}
          <i className="far fa-paper-plane"></i>
        </div>
      </div>
      <div className="post-comments">
        <div className="comment">
          <span className="comment-username">UsuarioComentario1:</span> ¡Hermosa foto!
        </div>
        <div className="comment">
          <span className="comment-username">UsuarioComentario2:</span> Fantástico lugar.
        </div>
        {/* Agrega más comentarios según sea necesario */}
      </div>
      <div className="like-comment-buttons">
        <button className="like-button">
          {/* Botón de "Me gusta" */}
          <i className="far fa-heart"></i> Me gusta
        </button>
        <button className="comment-button">
          {/* Botón de "Comentar" */}
          <i className="far fa-comment"></i> Comentar
        </button>
      </div>
      <input
        type="text"
        placeholder="Añadir un comentario..."
        className="comment-input"
      />
      <button className="post-comment-button">
        Publicar
      </button>
    </div>
  );
}

export default Post;
