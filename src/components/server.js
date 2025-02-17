const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configurar conexión a base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'adso',
    database: process.env.DB_NAME || 'horizontes',
    port: process.env.DB_PORT || 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL.');
});

// Ruta para registrar un nuevo usuario
app.post('/api/registrar', (req, res) => {
    const {
        identificacion,
        tipo_identificacion_id,
        nombre_completo,
        telefono,
        celular,
        correo_electronico,
        contrasena,
        direccion,
        departamento_id,
        municipio_id,
        estado
    } = req.body;

    // Validar los datos recibidos
    if (!identificacion || !tipo_identificacion_id || !nombre_completo || !correo_electronico || !contrasena) {
        return res.status(400).json({ message: 'Por favor, complete todos los campos obligatorios.' });
    }

    const query = `INSERT INTO tb_usuarios (identificacion, tipo_identificacion_id, nombre_completo, telefono, celular, correo_electronico, contrasena, direccion, departamento_id, municipio_id, estado)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
        query,
        [identificacion, tipo_identificacion_id, nombre_completo, telefono, celular, correo_electronico, contrasena, direccion, departamento_id, municipio_id, estado],
        (err, result) => {
            if (err) {
                console.error('Error al registrar usuario:', err);
                return res.status(500).json({ message: 'Error al registrar el usuario.' });
            }
            res.status(200).json({ message: 'Usuario registrado correctamente.' });
        }
    );
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
