const request = require('supertest')
const { app, server }  = require('../server.js')

afterAll((done) => {
  server.close(done);
});

describe('User API', () => {
    it('deve mostrar todos os users', async () => {
        const res = await request(app).get('/api/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('users')
    })
}  )