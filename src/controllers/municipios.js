const db = require('../config/db');

exports.obtenerMunicipios = (req, res) => {
    const idDepartamento = req.query.id;
    let query = 'SELECT id_municipio, nombre FROM tb_municipios WHERE estado = 1';
    let params = [];

    if (idDepartamento) {
        query += ' AND departamento_id = ?';
        params.push(idDepartamento);
    }

    console.log('Query:', query);
    db.query(query, params, (err, results) => { // Agregado 'results' como parámetro
        if (err) {
            console.error('Error al obtener municipios:', err);
            return res.status(500).json({ message: 'Error al obtener los municipios.' });
        }
        res.status(200).json(results); // Ahora 'results' está definido
    });
};