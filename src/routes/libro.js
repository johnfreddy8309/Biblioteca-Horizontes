const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro');
const db = require('../config/db'); 

// Obtener todos los libro
router.get('/ver-libro', libroController.obtenerLibro);

router.get('/ver-libros', (req, res) => {
  const { titulo } = req.query;

  if (!titulo) {
    return res.status(400).json({ error: 'Se requiere el título del libro' });
  }

  db.query('SELECT * FROM tb_libro WHERE  LOWER (titulo) LIKE ?', [`%${titulo}%`], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al buscar el libro' });

    if (results.length === 0) return res.status(404).json({ mensaje: 'No se encontraron libros con ese título' });

    res.json(results);
  });
});

//Registrar nuevo libro
router.post('/libro', libroController.registrarLibro);



// Actualizar libro completo (PUT)
router.put('/libro:id', libroController.actualizarLibro);

// Modificar campos especificos del libro
router.patch('/libro:id', libroController.modificarLibro);

//Obtener un solo libro por ID
router.get('/libro:id', (req, res) => {
    const { id } = req.params;
    
    db.query('SELECT * FROM tb_libro WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener el libro' });
        if (results.length === 0) return res.status(404).json({ error: 'Libro no encontrado' });
        res.json(results[0]); //Se envia solo el libro encontrado
    });
});

module.exports = router;