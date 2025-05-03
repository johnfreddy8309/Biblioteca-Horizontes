




const db = require('../config/db'); // aqui conectamos con nuestra base de datos

// obtener todos los libros
const obtenerLibros = (req, res) => {
    db.query('SELECT id, titulo, autor, isbn, editorial_id FROM libros ', (err, results) => {
        if (err) return res.status(500).json({error: 'Error al obtener libros'});
        res.json(results);
    });
};

//registrar nuevo libro
const registrarLibro = (req, res) => {
    const { titulo, autor, editorial, isbn } = req.body;
    if (!titulo || !autor || !isbn) {
        return res.status(400).json({ error: 'Faltan campos obligatorios'})
    }

    const query = 'INSERT INTO libros (titulo, autor, isbn, editorial_id) VALUES (?; ?; ?; ?)';
    db.query(query, [titulo, autor, editorial, isbn], (err, result) =>{
        if (err) return res.status(500).json({ error: 'Error al registrar el libro'});
        res.status(201).json({ mensaje: 'Libro registrado con exito', id: result.onsertId});

    });
};

// Actualizar libro completo (PUT)
const actualizarLibro = (req, res) =>{
    const { id} = req.params;
    const { titulo, autor, editorial,  isbn } = req.body;

    const query = 'UPDATE libros SET titulo = ?, autor = ?, isbn = ? WHERE id = ?';
    db.query(query, [titulo, autor, editorial,  isbn, id], (err) => {
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

    const query = `UPDATE libros SET ${camposActualizar} WHERE id = ?`;
    db.query(query, [...valores, id], (err) => {
        if (err) return res.status(500).json({ error: 'Error al modificar el libro' });
        res.json({ mensaje: 'Libro modificado correctamente'});
    });
};

module.exports = {
    obtenerLibros,
    registrarLibro,
    actualizarLibro,
    modificarLibro
};


