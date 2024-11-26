import React from 'react';
import './LandingPage.css';
import imagen1 from '../assets/images/imagen1.jpg';
import imagen2 from '../assets/images/imagen2.jpg';
import imagen3 from '../assets/images/imagen3.jpg';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Bienvenido a nuestra biblioteca</h1>
      <p>Explora nuestras colecciones de libros y géneros literarios.</p>
      <div className="image-gallery">
        <img src={imagen1} alt="Descripción 1" className="landing-image" />
        <img src={imagen2} alt="Descripción 2" className="landing-image" />
        <img src={imagen3} alt="Descripción 3" className="landing-image" />
      </div>
    </div>
  );
};

export default LandingPage;
