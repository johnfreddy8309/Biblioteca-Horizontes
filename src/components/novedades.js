import React, {useState} from "react";


const Novedades = () => {

    const libros = [
        {id: 1, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", genero: "Novela", editorial: "Sudamericana", año: 1985},
        {id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Novela", editorial: "Sudamericana", año: 1967},
        {id: 3, titulo: "La casa de los espíritus", autor: "Isabel Allende", genero: "Novela", editorial: "Plaza & Janés", año: 1982},
    ];

    return (
        <div>            
                <div className="Novedades">
                    {libros.map((libro) => (
                        <div key={libro.id} className="libro">
                            <h3>{libro.titulo}</h3>
                            <p>{libro.autor}</p>
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

export default Novedades;