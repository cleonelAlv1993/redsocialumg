import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Main from '../Componentes/Main.js';
import Loading from '../Componentes/Loading.js';
import Post from '../Componentes/Post.js';

async function cargarPosts(fechaDelUltimoPost){
    const query = fechaDelUltimoPost ? `?fecha=${fechaDelUltimoPost}` : '';
    const { data: nuevosPosts } = await Axios.get(`/api/posts/feed${query}`);

    return nuevosPosts;
}

const NUMERO_DE_POSTS_POR_LLAMADA = 3;

export default function Fedd({mostrarError, usuario}){
    const [posts, setPosts] = useState([]);
    const [cargandoPostIniciales, setcargandoPostIniciales] = useState(true);
    const [cargandoMasPost, setcargandoMasPost] = useState(false);
    const [todosLosPostCargados, setTodosLosPostCargados] = useState(false);

    useEffect(() => {
            async function cargarPostsIniciales(){
                try {
                    const nuevosPosts = await cargarPosts();
                    setPosts(nuevosPosts);
                    console.log(nuevosPosts);
                    setcargandoPostIniciales(false);
                    revisarSiHayMasPosts(nuevosPosts);
                } catch (error) {
                    mostrarError('Error al cargar publicaciones');
                    console.log(error);
                }
                
        }
        cargarPostsIniciales()
    },
        []
    );

    function actualizarPost(postOriginal, postActualizado){
        setPosts(posts => {
            const postsActualizados = posts.map(post => {
                if (post !== postOriginal) {
                    return post;
                } 
                return postActualizado;
            } );
            return postsActualizados;
        } );

    }

    async function cargarMasPosts(){
        if (cargandoMasPost) {
            return;
        }
        try {
            setcargandoMasPost(true);
            const fechaDelUltimoPost = posts[posts.length - 1].fecha_creado;
            const nuevosPosts = await cargarPosts(fechaDelUltimoPost);
            setPosts(viejosPosts => [...viejosPosts,...nuevosPosts]);
            setcargandoMasPost(false);
            revisarSiHayMasPosts(nuevosPosts);
        } catch (error) {
            setcargandoMasPost(false);
            mostrarError('Error al cargar publicaciones');
            console.log(error);
        }
    }

    function revisarSiHayMasPosts(nuevosPosts){
        if (nuevosPosts.length < NUMERO_DE_POSTS_POR_LLAMADA) {
            setTodosLosPostCargados(true);
        }
    }

    if (cargandoPostIniciales) {
        return(        
        <Main center>
            <Loading />
        </Main>);        
    }

    if (!cargandoPostIniciales && posts.length === 0) {
        return(        
        <Main center>
            <NosiguesANadie />
        </Main>);   
    }

    return (
        <Main center>
            <div className="Feed">
                {
                    posts.map(post => (
                        <Post 
                            key={post._id} 
                            post={post} 
                            actualizarPost={actualizarPost}
                            mostrarError={mostrarError}
                            usuario={usuario}
                        />
                    ))
                }
                <CargarMasPosts onClick={cargarMasPosts} todosLosPostCargados={todosLosPostCargados} />
            </div>
        </Main>
    );
}

function NosiguesANadie(){
    return (
        <div className="NoSiguesANadie">
            <p className="NoSiguesANadie_mensaje">
                No aparecen fotos porque no sigues a nadie o no han publicado nada.
            </p>
            <div className="text-center">
                <Link to="/explore/" className="NoSiguesANadie__boton">
                        Explora la red social
                </Link>
            </div> 
        </div>
    );
}

function CargarMasPosts({ onClick, todosLosPostCargados}){
    if (todosLosPostCargados) {
        return <div className = "Feed__no-hay-mas-posts"> No hay mas publicaciones</div>
    }
    return (
        <button className="Feed__cargar-mas" onClick={onClick}>
            Cargar más publicaciones
        </button>
    );
}