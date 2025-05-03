//routes/prestamos.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta POST para insertar prestamos
router.post('/prestamos', (req, res) => {
    const { titulo, autor, fechaPrestamo, fechaDevolucion} = req.body;


// Validar que los campos no estén vacíos
    if  (!titulo || !autor || !fechaPrestamo || !fechaDevolucion) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

//Crear la consulta sql para insertar el prestamo

const query = 'INSERT INTO tb_prestamos (titulo, autor, fechaPrestamo, fechaDevolucion) VALUES (?, ?, ?, ?)';
const values = [titulo, autor, fechaPrestamo, fechaDevolucion];

db.query(query, values, (error, results) => {
    if (error) {
        console.error('Error al insertar el préstamo:', error);
        return res.status(500).json({ error: 'Error al insertar el préstamo' });
    }
    res.status(201).json({ message: 'Préstamo insertado correctamente'});
});
});

module.exports = router;

