import React, { Component } from 'react';

class RegistroUsuario extends Component {
  constructor(props) {
    super(props);
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

    // Asegúrate de enlazar los métodos en el constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Maneja cambios en los inputs del formulario
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // Maneja el envío del formulario
  async handleSubmit(event) {
    event.preventDefault();
    console.log('Datos del formulario:', this.state);

    try {
      const response = await fetch('http://localhost:3001/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });

      if (response.ok) {
        alert('Usuario registrado exitosamente');
      } else {
        alert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    }
  }

  render() {
    return (
      <div className="centrar-formulario">
        <form className="formulario" onSubmit={this.handleSubmit}>
          <div>
            <label>Tipo Identificación:</label>
            <input
              type="text"
              name="tipo_identificacion_id"
              value={this.state.tipo_identificacion_id}
              onChange={this.handleChange}
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
              type="email"
              name="correo_electronico"
              value={this.state.correo_electronico}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
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
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
}

export default RegistroUsuario;
