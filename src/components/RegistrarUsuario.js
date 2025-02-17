import React, { Component } from 'react';

class RegistroUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identificacion: '',
      tipo_identificacion_id: '',
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log('Datos del formulario:', this.state);

    // Validación básica de los campos del formulario
    if (!this.state.identificacion || !this.state.nombre_completo || !this.state.correo_electronico || !this.state.contraseña) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        alert('Usuario registrado exitosamente');
      } else {
        const errorData = await response.json();
        console.error('Error en la respuesta:', errorData);
        alert(`Error al registrar el usuario: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error en la operación fetch:', error);
      alert('Error de conexión');
    }
  }

  render() {
    return (
      <div className="centrar-formulario">
        <form className="formulario" onSubmit={this.handleSubmit}>
          <div>
            <label>Identificación:</label>
            <input
              type="text"
              name="identificacion"
              value={this.state.identificacion}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Tipo Identificación:</label>
            <input
              type="text"
              name="tipo_identificacion_id"
              value={this.state.tipo_identificacion_id}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Nombre Completo:</label>
            <input
              type="text"
              name="nombre_completo"
              value={this.state.nombre_completo}
              onChange={this.handleChange}
              required
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
              required
            />
          </div>

          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              value={this.state.contraseña}
              onChange={this.handleChange}
              required
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
