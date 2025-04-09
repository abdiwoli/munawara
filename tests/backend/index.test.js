const request = require('supertest');
const app = require('../server');

test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Munawara Backend is Running');
  });