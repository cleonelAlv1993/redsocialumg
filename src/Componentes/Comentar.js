import React, { useState } from "react";

export default function Comentar({ onSubmitComentario, mostrarError }) {
    const [mensaje, setMensaje] = useState("");

    async function onSubmit(e){
        e.preventDefault();
        if(mensaje.length === 0){
            mostrarError("Debes escribir un comentario");
            return;
        }
        try {
            await onSubmitComentario(mensaje);
            setMensaje("");
        } catch (error) {
            mostrarError(error.message);
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