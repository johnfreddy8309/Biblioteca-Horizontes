import React, { Component } from 'react'; // Importa React y la clase base Component

// Componente de clase para el registro de usuario
class RegistroUsuario extends Component {
  constructor(props) {
    super(props); // Llama al constructor de la clase padre
    // Define el estado inicial del formulario con los campos vacíos
    this.state = {
      tipo_identificacion_id: '',
      identificacion: '',
      nombre_completo: '',
      telefono: '',
      celular: '',
      correo_electronico: '',
      contraseña: '',
      direccion: '',
      departamento_id: '',
      municipio_id: '',
      estado: ''
    };
  }

  // Maneja cambios en los inputs del formulario
  handleChange = (event) => {
    const { name, value } = event.target; // Extrae el nombre y valor del campo actualizado
    this.setState({ [name]: value }); // Actualiza el estado dinámicamente basado en el nombre del campo
  };

  // Maneja el envío del formulario
  handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página
    console.log('Datos del formulario:', this.state); // Imprime los datos del formulario en la consola
    // Aquí puedes implementar la lógica para enviar los datos al backend
  };

  // Renderiza el formulario de registro de usuario
  render() {
    return (
      <div className="centrar-formulario">
        {/* Formulario centrado con un manejador para el evento "submit" */}
        <form className="formulario" onSubmit={this.handleSubmit}>
          {/* Cada input se asocia con un campo del estado */}
          <div>
            <label>Tipo Identificación:</label>
            <input
              type="text"
              name="tipo_identificacion_id" // Nombre del campo
              value={this.state.tipo_identificacion_id} // Valor actual del estado
              onChange={this.handleChange} // Maneja los cambios en el input
            />
          </div>
          <div>
            <label>Identificación:</label>
            <input
              type="text"
              name="identificacion"
              value={this.state.identificacion}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Nombre Completo:</label>
            <input
              type="text"
              name="nombre_completo"
              value={this.state.nombre_completo}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={this.state.telefono}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Celular:</label>
            <input
              type="text"
              name="celular"
              value={this.state.celular}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input
              type="email" // Valida automáticamente el formato del correo
              name="correo_electronico"
              value={this.state.correo_electronico}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password" // Oculta los caracteres ingresados
              name="contraseña"
              value={this.state.contraseña}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              value={this.state.direccion}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Departamento ID:</label>
            <input
              type="text"
              name="departamento_id"
              value={this.state.departamento_id}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Municipio ID:</label>
            <input
              type="text"
              name="municipio_id"
              value={this.state.municipio_id}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Estado:</label>
            <input
              type="text"
              name="estado"
              value={this.state.estado}
              onChange={this.handleChange}
            />
          </div>
          {/* Botón para enviar el formulario */}
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
}

export default RegistroUsuario; // Exporta el componente para usarlo en otras partes de la app
