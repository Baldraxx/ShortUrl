const request = require('supertest');
const app = require('../src/app');
let code;

describe('URL Shortener API', () => {
    it('POST /shorten → crea y devuelve un shortCode', async() => {
        const res = await request(app)
            .post('/shorten')
            .send({ url: 'https://example.com' })
            .expect(201);
        expect(res.body.shortCode).toHaveLength(6);
        code = res.body.shortCode;
    });

    it('GET /:code → redirige (302)', () =>
        request(app)
        .get(`/${code}`)
        .expect(302)
        .expect('Location', 'https://example.com')
    );

    it('GET /:code/stats → devuelve estadísticas', () =>
        request(app)
        .get(`/${code}/stats`)
        .expect(200)
        .expect(res => {
            expect(res.body.accessCount).toBeGreaterThanOrEqual(1);
        })
    );

    it('PUT /:code → actualiza la URL', () =>
        request(app)
        .put(`/${code}`)
        .send({ url: 'https://nuevo.com' })
        .expect(200)
        .expect(res => {
            expect(res.body.url).toBe('https://nuevo.com');
        })
    );

    it('DELETE /:code → elimina el recurso', () =>
        request(app)
        .delete(`/${code}`)
        .expect(204)
    );
});