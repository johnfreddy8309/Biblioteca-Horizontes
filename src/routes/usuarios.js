// src/routes/usuarios.js
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');

router.post('/registrar-usuario', usuariosController.registrarUsuario);
router.get('/tipos-identificacion', usuariosController.obtenerTiposIdentificacion);

module.exports = router;