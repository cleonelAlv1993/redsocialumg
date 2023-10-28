import Nav from './Componentes/Nav.js';
import Signup from './Vistas/Signup.js';
import Login from './Vistas/Login.js';

function App() {
  return (
    <div className="ContenedorTemporal">
      <Nav/>
      <Signup/>
      <Login/>
    </div>
  );
}

export default App;
