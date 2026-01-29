import request from 'supertest';
import app from '../backend/app.js';

describe('API Health Check', () => {
  test('GET / should return API running message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
