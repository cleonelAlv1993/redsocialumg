import React from 'react';
import Main from '../Componentes/Main';
import Loading from '../Componentes/Loading';
import Avatar from '../Componentes/Avatar';
import Comentar from '../Componentes/Comentar';
import BotonLike from '../Componentes/BotonLike';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Post({mostrarError, match}){

    return (
        <Main center>
            <h1>Post</h1>
        </Main>
    );

}