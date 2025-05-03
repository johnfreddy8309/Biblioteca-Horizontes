import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


const Libro = () => {
    const {id} = useParams();
    const [libros, setLibro] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/libro/${id}`)
        .then(res => res.json())
        .then(data => setLibro(data))
        .catch(err => console.error('Error al cargar el libro:'));
},[id]);
return (
    <div className="container mt-4">
        <h2>Listado de Libros</h2>
        {libros.length === 0 ? (
            <p>No hay libros disponibles.</p>
        ) : (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>ISBN</th>
                        <th>Acciones</th> {/* Nueva columna para las acciones */}
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => (
                        <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.autor}</td>
                            <td>{libro.editorial}</td>
                            <td>{libro.isbn}</td>
                            <td>
                              
                                <link to={`/libros/${libro.id}`} className="btn btn-sm btn-info">
                                    libros
                                </link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
);
};
export default Libro;
