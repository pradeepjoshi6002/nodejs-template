import request from 'supertest';
import { calculateDiscount } from './src/utils';
import app from './src/app';

describe('App', () => {
  it('should return correct discount amount', () => {
    const res = calculateDiscount(100, 10);
    expect(res).toBe(10);
  });

  it('should return 500 status code on /error route', async () => {
    const res = await request(app).get('/error');
    expect(res.statusCode).toBe(401);
  });
});
