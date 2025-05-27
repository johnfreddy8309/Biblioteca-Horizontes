const request = require('supertest');
const app = require('../../src/server');
// Asegúrate de que la ruta sea correcta

describe('Rutas de municipios', () => {

    it('GET /municipios debe responder con 200', async () => {
        const res = await request (app).get('/api/municipios');
        expect(res.statusCode).toBe(200);       
});



});