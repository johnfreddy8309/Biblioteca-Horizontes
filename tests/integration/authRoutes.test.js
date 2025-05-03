const request = require('supertest');
const app = require('../../index'); // tu app Express

describe('POST /api/login', () => {
  it('responde con token al hacer login válido', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ correo: 'usuario@correo.com', contrasena: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
