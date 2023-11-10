import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../Componentes/Main';
import imagenSignup from '../imagenes/celulares.png';
import './Signup.css';

export default function Signup({ signup, mostrarError }){
    const [usuario, setUsuario] = useState({
        email:'',
        username: '',
        password: '',
        bio: '',
        nombre: '' 
    })

    function handleInputChange(e){
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();

        try {
           await signup(usuario);
        } catch (error) {
            mostrarError(error.response.data);
        }
    }


    return (
        <Main center={true}>
            <div className="Signup">
                <img src={imagenSignup} alt="" className="Signup_img"/>
                <div className="FormContainer">
                    <h1 className="Form_titulo">Red social</h1>
                    <p className="FormContainer_info">
                        Registros
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            className="Form_field" 
                            required
                            onChange={handleInputChange}
                            value={usuario.email}
                        />
                        <input 
                            type="text" 
                            name="nombre" 
                            placeholder="Nombre y Apellido" 
                            className="Form_field" 
                            required
                            minLength="3"
                            maxLength="100"
                            onChange={handleInputChange}
                            value={usuario.nombre}
                        />
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Usuario" 
                            className="Form_field" 
                            required
                            minLength="3"
                            maxLength="30"
                            onChange={handleInputChange}
                            value={usuario.username}
                        />
                        <input 
                            type="text" 
                            name="bio" 
                            placeholder="Descripción sobre tu persona" 
                            className="Form_field" 
                            required
                            maxLength="150"
                            onChange={handleInputChange}
                            value={usuario.bio}
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            className="Form_field" 
                            required
                            onChange={handleInputChange}
                            value={usuario.password}                            
                        />
                        <button className="Form_submit" type="submit">
                            Enviar
                        </button>
                        <p className="FormContainer_info">
                            Ya tienes cuenta? <Link to="/login">Login</Link>
                        </p>    
                    </form>
                </div>
            </div>
        </Main>
    );
}