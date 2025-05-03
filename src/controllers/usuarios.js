// src/controllers/usuarios.js
const db = require('../config/db');

/**
 * Controlador para registrar un nuevo usuario en la base de datos.
 *
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
exports.registrarUsuario = (req, res) => {
    // Extraer los datos del usuario del cuerpo de la solicitud
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
        municipio_id
    } = req.body;

    // Validar que los campos obligatorios estén presentes
    if (!identificacion || !tipo_identificacion_id || !nombre_completo || !correo_electronico || !contrasena) {
        return res.status(400).json({ message: 'Por favor, complete todos los campos obligatorios.' });
    }

    // Definir la consulta SQL para insertar el nuevo usuario
    const query = `
        INSERT INTO tb_usuarios (
            identificacion, 
            tipo_identificacion_id, 
            nombre_completo, 
            telefono, 
            celular, 
            correo_electronico, 
            contrasena, 
            direccion, 
            departamento_id, 
            municipio_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Imprimir los datos recibidos para depuración
    console.log("datos recibidos:", req.body);

    // Ejecutar la consulta SQL con los datos del usuario
    db.query(
        query,
        [identificacion, tipo_identificacion_id, nombre_completo, telefono, celular, correo_electronico, contrasena, direccion, departamento_id, municipio_id],
        (err, result) => {
            if (err) {
                // Manejar errores de la base de datos
                console.error('Error al registrar usuario:', err);
                return res.status(500).json({ message: 'Error al registrar el usuario.' });
            }
            // Enviar una respuesta exitosa al cliente
            res.status(200).json({ message: 'Usuario registrado correctamente.' });
        }
    );
};

exports.obtenerTiposIdentificacion = (req, res) => {
    const query = 'SELECT id_tipo_identificacion, nombre FROM tb_tipo_identificacion';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener tipos de identificación:', err);
            return res.status(500).json({ message: 'Error al obtener los tipos de identificación.' });
        }
        res.status(200).json(results);
    });
};