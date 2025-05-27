const request = require('supertest');
const app = require('../../src/server');
const db = require('../../src/config/db') // Asegúrate de que la ruta sea correcta

describe('Rutas de prestamos', () => {  
    it('GET /prestamos debe responder con 200', async () => {
        const res = await request(app).get('/api/prestamos');
        console.log(res.body); // Imprime la respuesta para depuración
        expect(res.statusCode).toBe(200);
    });

    afterAll(() => {
        db.end();  // Esto cerrará la conexión a la base de datos
    });

});