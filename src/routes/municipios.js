const express = require('express');
const router = express.Router();
const municipiosController = require('../controllers/municipios');

router.get('/municipios', municipiosController.obtenerMunicipios);

module.exports = router;