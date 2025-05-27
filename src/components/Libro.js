import React, { useState } from 'react';
import './Libro.css';

const Libro = () => {
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    editorial_id: null,
    isbn: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'editorial_id' ? (value ? parseInt(value, 10) : null) : value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validación simple
    if (!form.titulo || !form.autor || !form.isbn || form.editorial_id === null) {
      return alert('Por favor, complete todos los campos');
    }

    const res = await fetch('http://localhost:3001/api/libro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.mensaje || 'Error al registrar libro');
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">📚 Registrar Libro</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          onChange={handleChange}
          className="registro-input"
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          onChange={handleChange}
          className="registro-input"
        />
        <input
          type="number"
          name="editorial_id"
          placeholder="ID Editorial"
          onChange={handleChange}
          className="registro-input"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          onChange={handleChange}
          className="registro-input"
        />
        <button type="submit" className="registro-button">Registrar</button>
      </form>
    </div>
  );
};

export default Libro;
