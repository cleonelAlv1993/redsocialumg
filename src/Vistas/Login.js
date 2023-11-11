import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../Componentes/Main';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Login({ login, mostrarError }) {
  const [emailYPassword, setEmailYPassword] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(e) {
    setEmailYPassword({
      ...emailYPassword,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(emailYPassword.email, emailYPassword.password);
    } catch (error) {
      mostrarError(error.response.data);
    }
  }

  return (
    <Main center>
      <div className="FormContainer">
        <h1 className="Form__titulo">Red Social</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="Form_field"
              required
              onChange={handleInputChange}
              value={emailYPassword.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="Form_field"
              required
              onChange={handleInputChange}
              value={emailYPassword.password}
            />
            <button className="Form_submit" type="submit">
              Iniciar sesión
            </button>
            <div>
              <GoogleOAuthProvider clientId="">
                <button type="submit" className="GoogleButton">
                  Iniciar sesión con Google
                </button>
              </GoogleOAuthProvider>
            </div>
            <p className="FormContainer_info">
              ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
            </p>
          </form>
        </div>
      </div>
    </Main>
  );
}
