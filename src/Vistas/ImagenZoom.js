import React, { useState } from 'react';
import './ImagenZoom.css';

const ImagenZoom = ({ src, alt }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseEnter = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  return (
    <div
      className={`imagen-zoom-container ${zoom ? 'zoomed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImagenZoom;
