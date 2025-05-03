// Ejemplo básico de Express para que Supertest funcione
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { correo, contrasena } = req.body;
  if (correo === 'usuario@correo.com' && contrasena === '123456') {
    return res.json({ token: 'fake-jwt-token' });
  }
  res.status(401).json({ error: 'Credenciales inválidas' });
});

app.get('/api/libros', (req, res) => {
  res.json([{ titulo: 'Cien años de soledad' }]);
});

module.exports = app;
