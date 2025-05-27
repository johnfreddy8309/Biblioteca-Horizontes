const db = require('../../src/config/db'); // O ajusta la ruta si estás en otra carpeta

exports.obtenerPrestamos = (req, res) => {
  db.query('SELECT * FROM tb_prestamos', (err, resultados) => {
    if (err) {
      console.error(err); 
      return res.status(500).json({ error: 'Error al obtener préstamos' });
    }
    res.json(resultados);
  });
};

exports.obtenerMisPrestamos = (req, res) => {
  const { titulo } = req.query;

  console.log('Título recibido:', titulo); // Para depuración

  if (!titulo) {
    return res.status(400).json({ error: 'Debe proporcionar un título' });
  }

  const query = `
    SELECT titulo, autor, fechaPrestamo, fechaDevolucion
    FROM tb_prestamos
    WHERE LOWER (titulo) LIKE LOWER (?);
  `;

  db.query(query, [`%${titulo}%`], (err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener los préstamos' });
    }

    if (resultados.length === 0) {
      return res.status(404).json({ message: 'No se encontraron préstamos con ese título' });
    }

    res.json(resultados);
  });
};
