import React, {useState, useEffect}  from 'react';
import Main from '../Componentes/Main';
import Loading from '../Componentes/Loading';
import Avatar from '../Componentes/Avatar';
import Comentar from '../Componentes/Comentar';
import BotonLike from '../Componentes/BotonLike';
import RecursoNoExiste from '../Componentes/RecursoNoExiste';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toggleLike, comentar } from "../Helpers/post-helpers.js";
import './Posts.css';
import ImagenZoom from "../Vistas/ImagenZoom";

export default function PostVista({mostrarError, match, usuario}){
    const postId = match.params.id;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [postNoExiste, setPostNoExiste] = useState(false);
    const [enviandoLike, setEnviandoLike] = useState(false);

    useEffect(() => {

        async function cargagPost(){
            try {
                const {data: post} = await Axios.get(`/api/posts/${postId}`);
                setPost(post);
                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404 || error.response.status === 400) {
                    setPostNoExiste(true);
                }else{
                    mostrarError('Error al cargar post');
                    console.log(error);
                }
                setLoading(false);
            }
        }
        cargagPost();

    }, [postId]);

    async function onSubmitComentario(mensaje){
        const postActualizado = await comentar(post, mensaje, usuario);
        setPost(postActualizado);
     }

     async function onSubmitLike(){
        if (enviandoLike) {
            return;
        }

        try {
            setEnviandoLike(true);
            const postActualizado = await toggleLike(post);
            setPost(postActualizado);
            setEnviandoLike(false);
        } catch (error) {
            setEnviandoLike(false);
            mostrarError('Error al enviar like');
            console.log(error);
        }
    }

    if (loading) {
        return (
            <Main center>
                <Loading />
            </Main>
        );
    }

    if (postNoExiste) {
        return ( 
        <RecursoNoExiste mensaje="El post no existe"></RecursoNoExiste>
        );
    }

    if (post == null) {
        return null;
    }

    return (
        <Main center>
            <Post {...post} onSubmitComentario={onSubmitComentario} onSubmitLike={onSubmitLike} />
        </Main>
    );

}

function Post({
    numLikes,
    comentarios,
    caption,
    url,
    usuario,
    estaLike,
    onSubmitLike,
    onSubmitComentario
}) {
    return (
        <div className="Post">
            <div className="Post__image-container">
            <ImagenZoom src={url} alt={caption} />
            </div>
                <div className="Post__side-bar">
                    <Avatar usuario={usuario}></Avatar>
                    <div className="Post__comentarios-y-like">
                        <Comentarios usuario={usuario} caption={caption} comentarios={comentarios} />
                        <div className="Post__like">
                            <BotonLike onSubmitLike={onSubmitLike} like={estaLike} />
                        </div>
                        <p>A {numLikes} personas les ha gustado</p>
                        <Comentar onSubmitComentario={onSubmitComentario} />
                    </div>
                </div>
        </div>
    );
}

function Comentarios({ usuario, caption, comentarios }){
    return (
        <ul className="Post__comentarios">
            <li className="Post__comentario">
            <Link 
            to={`/perfil/${usuario.username}`} 
            className="Post__autor-comentario"
            >
              <b>{usuario.username}</b>
            </Link>{' '}
            {caption}
            </li>
            {
              comentarios.map(comentario => (
                <li className="Post__comentario" key={comentario._id} >
                    <Link 
                      to={`/perfil/${comentario.usuario.username}`}
                      className="Post__autor-comentario"
                      >
                        <b>{comentario.usuario.username}</b>
                    </Link>{' '}
                    {comentario.mensaje}
                </li>
            ))
            }
        </ul>
    );
}