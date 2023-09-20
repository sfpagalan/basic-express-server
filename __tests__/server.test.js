const request = require('supertest');
const server = require('../src/server');

describe('Server Routes', () => {
  it('should respond with a 404 on a bad route', async () => {
    const response = await request(server.app).get('/bad-route');
    expect(response.status).toBe(404);
  });

  it('should respond with a 404 on a bad method', async () => {
    const response = await request(server.app).post('/person');
    expect(response.status).toBe(404);
  });

  it('should respond with a 500 if no "name" in the query string', async () => {
    const response = await request(server.app).get('/person');
    expect(response.status).toBe(500);
  });

  it('should respond with a 200 if the "name" is in the query string', async () => {
    const response = await request(server.app).get('/person?name=John');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'John' });
  });

  it('should ensure that the output object is correct with a valid "name"', async () => {
    const response = await request(server.app).get('/person?name=Alice');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'Alice' });
  });
});
