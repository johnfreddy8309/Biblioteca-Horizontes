import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Login.css"; 


const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(false);
    setError("");
    console.log("Contraseña:", contrasena);


  try {
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correo, contrasena }),
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", data.token); // Guardar el token en el almacenamiento local
      window.location.href = "/home"; // Redirigir a la página de inicio
    } else {
      setError(data.error || "Error al iniciar sesión");
    }
  } catch (error) {
    setError("Error de conexión al servidor");
    console.error("Error:", error);
  } 
  
};

  return (
    <div className="Login-container">
      <div className="Login-box">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {mensaje && <p className="success-message">{mensaje}</p>}
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/registrar-usuario">Registrarme</Link>
        </p>
      </div>
    </div>
  );
};    

export default Login;

