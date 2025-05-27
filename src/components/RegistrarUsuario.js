import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./RegistrarUsuario.css"; 

const RegistroUsuario = () => {
  const [formState, setFormState] = useState({
    identificacion: "",
    tipo_identificacion_id: "",
    nombre_completo: "",
    telefono: "",
    celular: "",
    correo_electronico: "",
    contrasena: "",
    confirmarContrasena: "",
    direccion: "",
    departamento_id: "",
    municipio_id: "",
  });

  const [tiposIdentificacion, setTiposIdentificacion] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarTiposIdentificacion = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/tipos-identificacion"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTiposIdentificacion(data);
      } catch (error) {
        console.error("Error al cargar tipos de identificación:", error);
        alert("Error al cargar los tipos de identificación.");
      }
    };

    cargarTiposIdentificacion();
  }, []);

  useEffect(() => {
    const cargarDepartamentos = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/departamentos"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDepartamentos(data);
      } catch (error) {
        console.error("Error al cargar departamentos:", error);
      }
    };

    cargarDepartamentos();
  }, []);

  useEffect(() => {
    const cargarMunicipios = async () => {
      if (formState.departamento_id) {
        try {
          const response = await fetch(
            `http://localhost:3001/api/municipios?id=${formState.departamento_id}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setMunicipios(data);
        } catch (error) {
          console.error("Error al cargar municipios:", error);
        }
      } else {
        setMunicipios([]); // Limpiar municipios si no hay departamento seleccionado
      }
    };

    cargarMunicipios();
  }, [formState.departamento_id]); // Dependencia en formState.departamento_id

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formState);

    if (
      !formState.identificacion.trim() ||
      !formState.tipo_identificacion_id.trim() ||
      !formState.nombre_completo.trim() ||
      !formState.telefono.trim() ||
      !formState.celular.trim() ||
      !formState.correo_electronico.trim() ||
      !formState.contrasena.trim() ||
      !formState.confirmarContrasena.trim() ||
      !formState.direccion.trim() ||
      !formState.departamento_id.trim() ||
      !formState.municipio_id.trim()
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (formState.contrasena !== formState.confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/registrar-usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      alert("Se ha registrado el usuario correctamente.");
      navigate("/");
    } catch (error) {
      console.error("Error en la operación fetch:", error);
      alert("Error de conexión");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <div>
          <label>Tipo Identificación:</label>
          <select
            name="tipo_identificacion_id"
            value={formState.tipo_identificacion_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un tipo de identificación</option>
            {tiposIdentificacion.map((tipo) => (
              <option
                key={tipo.id_tipo_identificacion}
                value={tipo.id_tipo_identificacion}
              >
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>
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

        <div className="password-input">
          <label>Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="contrasena"
            value={formState.contrasena}
            onChange={handleChange}
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        <div className="password-input">
          <label>Confirmar Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmarContrasena"
            value={formState.confirmarContrasena}
            onChange={handleChange}
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
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
          <label>Departamento:</label>
          <select
            name="departamento_id"
            value={formState.departamento_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un Departamento:</option>
            {departamentos.map((tipo) => (
              <option
                key={tipo.id_departamento}
                value={tipo.id_departamento}
              >
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Municipio:</label>
          <select
            name="municipio_id"
            value={formState.municipio_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un Municipio:</option>
            {municipios.map((municipio) => (
              <option
                key={municipio.id_municipio}
                value={municipio.id_municipio}
              >
                {municipio.nombre}
              </option>
            ))}
          </select>
        </div>

        
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;