const request = require('supertest');
const app = require('../../src/server');
const db = require('../../src/config/db');

describe('Pruebas de integración para la ruta /usuarios', () => {
    it('GET /usuarios debe devolver una lista de usuarios', async () => {
        const res = await request(app).get('/api/usuarios');
        console.log(res.body); // Para verificar errores
        expect(res.statusCode).toBe(200);
    });

    afterAll(done => {
        if (db && db.end) {
            db.end(err => {
                if (err) console.error('Error al cerrar conexión:', err);
                done();
            });
        } else {
            done();
        }
    });
});