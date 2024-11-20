const express = require('express');
const mysql = require('mysql');
const bodyParser = require ('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Configurar conexion a base de datos
const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adso',
    database: 'Horizontes',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conectado a la base de datos mysql.');
});

//Ruta para registrar un nuevo usuario
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

    const query = `INSERT INTO tb_usuarios (identificacion, tipo_identificacion_id, nombre_completo, telefono, celular, correo_electronico, contrasena, direccion, departamento_id, municipio_id, estado)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

                 db.query(
                    query,
                    [identificacion, tipo_identificacion_id, nombre_completo, telefono, celular, correo_electronico, contrasena, direccion, departamento_id, municipio_id, estado],
                    (err, result) => {
                        if (err) {
                            console.error('Error al registrar usuario:', err);
                            res.status(500).send('Error al registrar el usurio.');
                            return;
                        }
                        res.status(200).send('Usuario registrado correctamente.');
                    }

                 );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ${3306}')
});