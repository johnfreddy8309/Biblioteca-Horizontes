// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Rutas
const usuariosRoutes = require('./routes/usuarios');
const departamentosRoutes = require('./routes/departamentos');
const municipiosRoutes = require('./routes/municipios');
const prestamosRoutes = require('./routes/prestamos');
const loginRoutes = require('./routes/login');
const libroRoutes = require('./routes/libro');

const errorHandler = require('./middlewares/errores');

require('dotenv').config(); // Cargar variables de entorno
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', usuariosRoutes);
app.use('/api', departamentosRoutes);
app.use('/api', municipiosRoutes);
app.use('/api', prestamosRoutes);
app.use('/api', loginRoutes);
app.use('/api', libroRoutes);

// Middleware de errores
app.use(errorHandler);

// Exportar para pruebas
module.exports = app;

// Iniciar servidor si este archivo es el principal
if (require.main === module) {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
        console.log('¡La aplicación se ha levantado con éxito!');
    });
}
