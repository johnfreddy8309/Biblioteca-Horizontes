import React, { useState } from 'react';
import './MisPrestamos.css'; 

const MisPrestamos = () => {
    const [titulo, setTitulo] = useState('');
    const [resultados, setResultados] = useState([]);
    const [mensaje, setMensaje] = useState('');

    const buscarPrestamos = async () => {
        try {
console.log("Buscando préstamos con título:", titulo); 
            const response = await fetch(`http://localhost:3001/api/mis-prestamos?titulo=${encodeURIComponent(titulo)}`);

            const data = await response.json();

            if (response.ok) {
                setResultados(data);
                setMensaje('');
            } else {
                setResultados([]);
                setMensaje(data.message || 'No se encontraron préstamos');
            }

        } catch (error) {
            console.error('Error:', error);
            setMensaje('Error al buscar préstamos');
        }
    };

    return (
       <div className="prestamos-container">
  <h2 className="prestamos-title">🔍 Buscar mis préstamos</h2>

  <div className="form-group">
    <input
      type="text"
      placeholder="Escribe el título del libro..."
      value={titulo}
      onChange={(e) => setTitulo(e.target.value)}
      className="input-titulo"
    />
    <button onClick={buscarPrestamos} className="btn-buscar">Buscar</button>
  </div>

  {mensaje && <p className="mensaje-error">{mensaje}</p>}

  {resultados.length > 0 && (
    <div className="resultados-container">
      <h3 className="resultados-title">📚 Resultados:</h3>
      <ul className="resultados-lista">
        {resultados.map((prestamo, index) => (
          <li key={index} className="prestamo-item">
            <strong className="prestamo-titulo">{prestamo.titulo}</strong><br />
            <span>Autor: {prestamo.autor}</span><br />
            <span>📅 Prestado el: {prestamo.fechaPrestamo}</span><br />
            <span>⏳ Devolver antes de: {prestamo.fechaDevolucion}</span>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
    );
}

export default MisPrestamos;
