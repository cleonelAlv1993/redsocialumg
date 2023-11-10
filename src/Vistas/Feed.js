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

export default function Fedd({mostrarError}){
    const [posts, setPosts] = useState([]);
    const [cargandoPostIniciales, setcargandoPostIniciales] = useState(true);

    useEffect(() => {
            async function cargarPostsIniciales(){
                try {
                    const nuevosPosts = await cargarPosts();
                    setPosts(nuevosPosts);
                    console.log(nuevosPosts);
                    setcargandoPostIniciales(false);
                } catch (error) {
                    mostrarError('Error al cargar publicaciones');
                    console.log(error);
                }
                
        }
        cargarPostsIniciales()
    },
        []
    );

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
                        />
                    ))
                }
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