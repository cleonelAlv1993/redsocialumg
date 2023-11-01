import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { deleteToken, getToken, setToken, initAxiosInterceptors } from './Helpers/auth-helpers.js';
import Nav from './Componentes/Nav.js';
import Signup from './Vistas/Signup.js';
import Login from './Vistas/Login.js';

initAxiosInterceptors();

function App() {
  const [usuario, setUsuario] = useState(null);
  const[cargandoUsuario, setCargandoUsuario] = useState(true);

  useEffect(() => {
    async function cargarUsuario() {
      if(!getToken()) {
        setCargandoUsuario(false);
        return;
      }

      try{
        const { data: usuario } = await Axios.get('api/usuarios/whoami');
        setUsuario(usuario);
        setCargandoUsuario(false);
      }catch(error) {
        console.log(error)
      }
    }

    cargarUsuario();
  }, []);

  async function login(email, password){
    const {data} = await Axios.post('/api/usuarios/login', {
      email,
      password
    });
    setUsuario(data.usuario);
    setToken(data.token);
  }


  async function signup(usuario){
    const {data} = await Axios.post('/api/usuarios/signup', usuario);
    setUsuario(data.usuario);
    setToken(data.token);
  }

  function logout(){
    setUsuario(null);
    deleteToken();
  }

  return (
    <div className="ContenedorTemporal">
      <Nav/>
      <Signup signup={ signup } />
      <Login login={ login } />
    </div>
  );
}

export default App;
