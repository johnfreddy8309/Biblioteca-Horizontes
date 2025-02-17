import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroUsuario = () => {
  const [formState, setFormState] = useState({
    identificacion: '',
    tipo_identificacion_id: '',
    nombre_completo: '',
    telefono: '',
    celular: '',
    correo_electronico: '',
    contrasena: '',
    direccion: '',
    departamento_id: '',
    municipio_id: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formState);

    if (
      !formState.identificacion.trim() ||
      !formState.tipo_identificacion_id.trim() ||
      !formState.nombre_completo.trim() ||
      !formState.telefono.trim() ||
      !formState.celular.trim() ||
      !formState.correo_electronico.trim() ||
      !formState.contrasena.trim() ||
      !formState.direccion.trim() ||
      !formState.departamento_id.trim() ||
      !formState.municipio_id.trim()
    ) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/registrar-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      alert('Se ha registrado el usuario correctamente.');

      // Redirigir al usuario a la página de inicio
      navigate('/');
    } catch (error) {
      console.error('Error en la operación fetch:', error);
      alert('Error de conexión');
    }
  };

  return (
    <div className="centrar-formulario">
      <form className="formulario" onSubmit={handleSubmit}>
        <div>
          <label>Identificación:</label>
          <input
            type="text"
            name="identificacion"
            value={formState.identificacion}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Tipo Identificación:</label>
          <input
            type="text"
            name="tipo_identificacion_id"
            value={formState.tipo_identificacion_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombre_completo"
            value={formState.nombre_completo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formState.telefono}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Celular:</label>
          <input
            type="text"
            name="celular"
            value={formState.celular}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="correo_electronico"
            value={formState.correo_electronico}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contrasena"
            value={formState.contrasena}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={formState.direccion}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Departamento ID:</label>
          <input
            type="text"
            name="departamento_id"
            value={formState.departamento_id}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Municipio ID:</label>
          <input
            type="text"
            name="municipio_id"
            value={formState.municipio_id}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
