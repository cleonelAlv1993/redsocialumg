import React, { useState } from "react";

export default function Comentar({ onSubmitComentario, mostrarError }) {
    const [mensaje, setMensaje] = useState("");
    const [enviandoComentario, setEnviandoComentario] = useState(false);

    async function onSubmit(e){
        e.preventDefault();
        if (enviandoComentario) {
            return;
        }
        try {
            setEnviandoComentario(true);
            await onSubmitComentario(mensaje);
            setMensaje('');
            setEnviandoComentario(false);
        } catch (error) {
            setEnviandoComentario(false);
            mostrarError('Error al enviar comentario');
            console.log(error);
        }

    }
    return(
        <form className="Post__comentario-form-container" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Escribe un comentario"
                required
                maxLength="180"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            />
            <button type="submit" className="Comentar-Componente__boton">Comentar</button>
        </form>
    );
}