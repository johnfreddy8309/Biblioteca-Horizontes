// src/routes/login.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../config/db'); // ya conectado

// Ruta POST para iniciar sesión
router.post('/login', (req, res) => {
    const { correo, contrasena } = req.body;

    db.query('SELECT * FROM tb_usuarios WHERE correo_electronico = ? AND estado = 1', [correo], async (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado o inactivo' });
        }

        const usuario = results[0];

        // Validar contraseña
       // const isPasswordValid = await bcrypt.compare(contrasena, usuario.contrasena);
       if (contrasena !== usuario.contrasena) {
  return res.status(401).json({ error: 'Contraseña incorrecta' });
}
        

        // Crear token
        const token = jwt.sign(
            { id: usuario.id, correo: usuario.correo_electronico },
            'secreto_super_seguro', // Cambiar en producción
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token: token,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre_completo,
                correo: usuario.correo_electronico
            }
        });
    });
});

// Exportar el router
module.exports = router;
