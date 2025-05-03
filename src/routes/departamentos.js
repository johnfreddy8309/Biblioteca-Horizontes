const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamentos');

router.get('/departamentos', departamentosController.obtenerDepartamentos);

module.exports = router;