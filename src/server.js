// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');
const departamentosRoutes = require('./routes/departamentos');
const municipiosRoutes = require('./routes/municipios');
const prestamosRoutes = require('./routes/prestamos');
const loginRoutes = require('./routes/login');
const errorHandler = require('./middlewares/errores');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());


// Rutas
app.use(usuariosRoutes);
app.use(departamentosRoutes);
app.use(municipiosRoutes);
app.use(prestamosRoutes);
app.use('/api', loginRoutes);


// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('¡La aplicación se ha levantado con éxito!');
});