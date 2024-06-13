const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cRoutes = require('../routes/clientes'); 
const vRoutes = require('../routes/vendedores'); 


const app = express();
app.use(bodyParser.json());
app.use(cRoutes);
app.use(vRoutes);


//testar rota /getClients           endpoint
describe('GET /clients', () => {
  test('deve retornar todos os clientes', async () => {
    const res = await request(app).get("/getClient");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.clientes)).toBe(true);
    if (res.body.clientes.length > 0) {
      expect(res.body.clientes[0]).toHaveProperty('nome');
      expect(res.body.clientes[0]).toHaveProperty('email');
    }
  });
});

//testar rota /getVendedores           endpoint
describe('GET /sellers', () => {
  test('deve retornar todos os vendedores', async () => {
    const res = await request(app).get("/getSellers");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.vendedores)).toBe(true);
    if (res.body.vendedores.length > 0) {
      expect(res.body.vendedores[0]).toHaveProperty('nome');
      expect(res.body.vendedores[0]).toHaveProperty('email');
    }
  });
});

