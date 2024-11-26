import React from 'react';
import libro1 from '../assets/images/libro1.jpg';
import libro2 from '../assets/images/libro2.jpg';
import libro3 from '../assets/images/libro3.jpg';

const GaleriaLibros = () => {
  const libros = [
    { id: 1, titulo: 'Libro 1', imagen: libro1 },
    { id: 2, titulo: 'Libro 2', imagen: libro2 },
    { id: 3, titulo: 'Libro 3', imagen: libro3 },
  ];

  return (
    <div className="galeria-libros">
      {libros.map((libro) => (
        <div key={libro.id} className="libro-card">
          <img src={libro.imagen} alt={libro.titulo} className="libro-imagen" />
          <h3>{libro.titulo}</h3>
        </div>
      ))}
    </div>
  );
};

export default GaleriaLibros;
