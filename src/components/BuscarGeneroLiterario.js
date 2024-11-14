// src/components/BuscarGeneroLiterario.js

import React, {useState} from "react";

const BuscarGeneroLiteario = () => {
    const [genero, setGenero] = useState('');
    const [resultados, setResultados] = useState ([]);

      // Simulación de búsqueda (reemplázalo con una llamada a API si tienes una)

      const BuscarGenero = () => {
const generos = ['Ciencia ficcion', 'Documentales', 'Novelas', 'Terror'];
const resultadosFiltrados = generos.filter(g => g.toLowerCase().includes(genero.toLowerCase()));
setResultados(resultadosFiltrados);
      };

      return (
        <div>
            <h2>Buscar Genero Liteario</h2>
            <input
            type="text"
            value={genero}
            onChange={(e)=> setGenero(e.target.value)}
            placeholder="Ingrese un genero literario"
            />
            <button onClick={BuscarGenero}>Buscar</button>
            <ul>
                {resultados.map((res, index)=>(
                    <li key={index}>{res}</li>

                ))}
            </ul>
        </div>
      );

};
export default BuscarGeneroLiteario;