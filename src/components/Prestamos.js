import React, { useState } from "react";
import './prestamos.css';

const Prestamos = () => {

  // mensaje para los campos del formulario
  const [titulo, settitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [fechaPrestamo, setFechaPrestamo] = useState("");
  const [fechaDevolucion, setFechaDevolucion] = useState("");

  // Estado para manejar el memsaje de exito/error
  const [mensaje, setMensaje] = useState("");

  //Funcion para manejar el envio del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();



    // Validar que los campos no estén vacíos
    if (!titulo || !autor || !fechaPrestamo || !fechaDevolucion) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    // Crear el objeto del préstamo
    const nuevoPrestamo = {
      titulo,
      autor,
      fechaPrestamo,
      fechaDevolucion,
    };


// Enviar la solicitud POST al servidor
    try {
      // Enviar la solicitud POST al servidor
      const response = await fetch("http://localhost:3001/prestamos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoPrestamo),
      });

      const result = await response.json();

      if (response.status === 201) {
        setMensaje("Préstamo insertado correctamente");
        // Limpiar los campos del formulario
        settitulo("");
        setAutor("");
        setFechaPrestamo("");
        setFechaDevolucion("");
      }
      else {
        setMensaje(result.error || "Error al insertar el préstamo");
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Error al insertar el préstamo");
    }
  };

 
    

  return (
    <div className="prestamos-container">

      <h2>Registrar un nuevo prestamo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titulo:</label>
          <input
          type="text"
          value={titulo}
          onChange={(e) => settitulo(e.target.value)}
          required
          />
          </div>
          <div>
<label>Autor:</label>
<input
type="text"
value={autor}
onChange={(e) => setAutor(e.target.value)}
required
/>
</div>
          <div>
<label>Fecha de prestamo:</label>
<input
type="date"
value={fechaPrestamo}
onChange={(e) => setFechaPrestamo(e.target.value)}
required
/>
</div>
          <div>
<label>Fecha de devolucion:</label>
<input
type="date"
value={fechaDevolucion}
onChange={(e) => setFechaDevolucion(e.target.value)}
required
/>
</div>
<button type="submit">Registrar prestamo</button>

  </form>
  {mensaje && <p>{mensaje}</p>}
    </div>
  );
};
export default Prestamos;