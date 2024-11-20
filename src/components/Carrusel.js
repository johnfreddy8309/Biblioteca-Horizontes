import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import libro1 from '../images/libro1.jpg'; // Asegúrate de que las rutas son correctas
import libro2 from '../images/libro2.jpg';
import libro3 from '../images/libro3.jpg';

const Carrusel = () => {
  return (
    <div style={{maxWidth: '500px', margin: '0 auto', padding: '30px'}}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={libro1}
          alt="Primera diapositiva"
        />
        <Carousel.Caption>
          <h3>Primer Libro</h3>
          <p>Descripción del primer libro.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={libro2}
          alt="Segunda diapositiva"
        />
        <Carousel.Caption>
          <h3>Segundo Libro</h3>
          <p>Descripción del segundo libro.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={libro3}
          alt="Tercera diapositiva"
        />
        <Carousel.Caption>
          <h3>Tercer Libro</h3>
          <p>Descripción del tercer libro.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Carrusel;
