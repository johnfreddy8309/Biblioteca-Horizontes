const request = require('supertest');
const app = require('../../src/server');
const db = require('../../src/config/db'); // Asegúrate de que la ruta sea correcta

describe('Rutas de login', () => {
  it('POST /login con credenciales inválidas debe responder 401', async () => {
    const res = await request(app).post('/api/login').send({
      correo_electronico: 'usuario@falso.com',
      contrasena: 'incorrecta'
    });
    expect(res.statusCode).toBe(401);
  });

  afterAll(() => {
    db.end();  // Esto cerrará la conexión a la base de datos
});

});
