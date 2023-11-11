import Axios from "axios";

export default async function onToggleSiguiendo(usuario){
    let usuarioActualizado;

    if (usuario.siguiendo) {
        await Axios.delete(`/api/amigos/${usuario._id}/eliminar`);
        usuarioActualizado = {
            ...usuario, 
            numSeguidores: usuario.numSeguidores -1,
            siguiendo: false};
    } else {
        await Axios.post(`/api/amigos/${usuario._id}/seguir`);
        usuarioActualizado = {
           ...usuario, 
            numSeguidores: usuario.numSeguidores +1,
            siguiendo: true};
    }
    return usuarioActualizado;
}