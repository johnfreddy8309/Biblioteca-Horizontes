// Importamos React y el hook useState para manejar estados dentro del componente
import React, { useState } from 'react';

// Componente principal para buscar géneros literarios
const BuscarGeneroLiterario = () => {
  // Estado para almacenar el texto ingresado por el usuario
  const [genero, setGenero] = useState('');
  // Estado para almacenar los resultados de la búsqueda
  const [resultados, setResultados] = useState([]);
  // Estado para manejar mensajes de error
  const [error, setError] = useState(null);

  // Lista estática de géneros literarios disponibles para buscar
  const generosLiterarios = ['Ficción', 'Novelas', 'Historia', 'Terror', 'Biografía'];

  // Función para manejar los cambios en el campo de entrada
  const manejarCambio = (e) => {
    setGenero(e.target.value); // Actualiza el estado con el valor ingresado
    setError(null); // Limpia cualquier error previo al cambiar el texto
  };

  // Función para realizar la búsqueda del género literario
  const buscarGenero = () => {
    // Validación: si el campo está vacío, mostrar un mensaje de error
    if (!genero.trim()) {
      setError('Por favor, ingrese un género literario para buscar.');
      setResultados([]); // Limpia resultados previos
      return;
    }

    // Filtra los géneros literarios que coincidan con el texto ingresado (insensible a mayúsculas/minúsculas)
    const resultadosFiltrados = generosLiterarios.filter(g => 
      g.toLowerCase().includes(genero.toLowerCase())
    );
    setResultados(resultadosFiltrados); // Actualiza los resultados con los géneros encontrados

    // Si no hay resultados, muestra un mensaje de error
    if (resultadosFiltrados.length === 0) {
      setError('No se encontraron géneros literarios que coincidan con su búsqueda.');
    } else {
      setError(null); // Limpia el error si hay resultados
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Título principal */}
      <h2>Buscar Género Literario</h2>

      {/* Campo de entrada para ingresar el género literario */}
      <input
        type="text"
        value={genero} // Enlaza el estado "genero" con el valor del input
        onChange={manejarCambio} // Llama a la función manejarCambio al escribir
        placeholder="Ingrese un género literario" // Texto de guía dentro del input
        style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      {/* Botón para iniciar la búsqueda */}
      <button onClick={buscarGenero} style={{ marginLeft: '10px', padding: '8px' }}>
        Buscar
      </button>

      {/* Muestra un mensaje de error si existe */}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {/* Lista de resultados de la búsqueda */}
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {resultados.map((res, index) => (
          <li key={index} style={{ marginBottom: '8px', fontSize: '18px' }}>
            {res} {/* Cada resultado encontrado */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default BuscarGeneroLiterario;
