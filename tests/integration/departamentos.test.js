const request = require('supertest');
const app = require('../../src/server'); 


describe('Rutas de departamentos', () => {
it('GET /departamentos debe responder con 200', async () => {
    const res = await request(app).get('/api/departamentos');
    expect(res.statusCode).toBe(200);
});



});