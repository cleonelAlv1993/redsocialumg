import React, { useState, useEffect } from 'react';
import Post from './Post';
import SideNav from './SideNav';
import './estilosinicio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './rightSideNavStyles.css';

const postsData = [
  {
    username: 'Usuario1',
    image: 'imagen1.jpg',
    description: 'Descripción de la publicación 1',
  },
  {
    username: 'Usuario2',
    image: 'imagen2.jpeg',
    description: 'Descripción de la publicación 2',
  },
  // Agrega más datos de publicaciones según sea necesario
];

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false); // Nuevo estado para controlar la barra lateral derecha


  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div id="root" data-theme={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
      <div className="container">
        <SideNav />
        <div className="content">
          <div className="homepage-container">
            {postsData.map((post, index) => (
              <Post
                key={index}
                username={post.username}
                image={post.image}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`right-sidebar ${isRightSidebarOpen ? 'show' : ''}`}>
      </div>
    </div>
  );
}

export default App;