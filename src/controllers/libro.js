
const db = require('../config/db'); // aqui conectamos con nuestra base de dat
// obtener todos los libro


const obtenerLibro = (req, res) => {
    db.query('SELECT id, titulo, autor, isbn, editorial_id FROM tb_libro ', (err, results) => {
        if (err) return res.status(500).json({error: 'Error al obtener libro'});
        res.json(results);
    });
};

//registrar nuevo libro
const registrarLibro = (req, res) => {
    const { titulo, autor, editorial_id, isbn } = req.body;
    if (!titulo || !autor || !isbn) {
        return res.status(400).json({ error: 'Faltan campos obligatorios'})
    }

    console.log('datos recibidos:', req.body);

    const query = 'INSERT INTO tb_libro (titulo, autor, isbn, editorial_id) VALUES (?, ?, ?, ?)';
    db.query(query, [titulo, autor, isbn, editorial_id], (err, result) =>{
        if (err){
            console.error('Error al registrar el libro:', err);
            return res.status(500).json({ error: 'Error al registrar el libro'});
    }
        res.status(201).json({ mensaje: 'Libro registrado con exito', id: result.insertId});

    });
};

// Actualizar libro completo (PUT)
const actualizarLibro = (req, res) =>{
    const { id} = req.params;
    const { titulo, autor, isbn, editorial_id } = req.body;
const query = 'UPDATE tb_libro SET titulo = ?, autor = ?, isbn = ?, editorial_id = ? WHERE id = ?';
db.query(query, [titulo, autor, isbn, editorial_id, id], 

         (err) => {

        if (err) return res.status(500).json({ error: 'Error al actualizar el libro' });
        res.json({ mensaje: 'Libro actualizado correctamnete'});
    });    
};

// Actualizar solo algunos campos (PATCH)
const modificarLibro = (req, res) => {
    const { id } = req.params;
    const campos = req.body;

    const camposActualizar = Object.keys(campos).map(campo => `${campo} = ?`).join(', ');
    const valores =Object.values(campos);

    const query = `UPDATE tb_libro SET ${camposActualizar} WHERE id = ?`;
    db.query(query, [...valores, id], (err) => {
        if (err) return res.status(500).json({ error: 'Error al modificar el libro' });
        res.json({ mensaje: 'Libro modificado correctamente'});
    });
};

module.exports = {
    obtenerLibro,
    registrarLibro,
    actualizarLibro,
    modificarLibro
};


