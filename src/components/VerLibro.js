import React, { useState } from 'react';
import  './VerLibro.css';

const VerLibro = () => {
  const [titulo, setTitulo] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarLibro = async () => {
    if (!titulo.trim()) {
      alert('Escribe el título del libro');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3001/api/ver-libros?titulo=${encodeURIComponent(titulo)}`);
      const data = await res.json();

      if (res.ok) {
        setResultados(data);
      } else {
        alert(data.mensaje || 'No se encontró el libro');
        setResultados([]);
      }
    } catch (error) {
      console.error('Error al buscar el libro:', error);
    }
  };

  return (
    <div className="ver-libro-container">
      <h2>🔎 Buscar Libro por Título</h2>
      <div className="buscador">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
         
          placeholder="Escribe el título del libro"
        />
        <button onClick={buscarLibro}>Buscar</button>
      </div>

      {resultados.length > 0 && (
        <table className="ver-libro-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th>ISBN</th>
              <th>ID Editorial</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map(libro => (
              <tr key={libro.id}>
                <td>{libro.id}</td>
                <td>{libro.titulo}</td>
                <td>{libro.autor}</td>
                <td>{libro.isbn}</td>
                <td>{libro.editorial_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VerLibro;
