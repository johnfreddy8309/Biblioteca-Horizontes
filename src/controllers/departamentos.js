const db = require('../config/db');

exports.obtenerDepartamentos = (req, res) => {
    const query = 'SELECT id_departamento, nombre FROM tb_departamentos WHERE estado = 1';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener departamentos:', err);
            return res.status(500).json({ message: 'Error al obtener los departamentos.' });
        }
        res.status(200).json(results);
    });
};