import express, { NextFunction, Request, Response } from 'express';
import logger from './config/logger';
import createHttpError, { HttpError } from 'http-errors';

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'this is my app' });
});

 
app.get('/error', (req: Request, res: Response, next: NextFunction) => {
  const err = createHttpError(401, 'access denied');
  next(err);
});
// app.get('/error', (req: Request, res: Response, next: NextFunction) => {
//   throw createHttpError(401, 'access denied');
// });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [{ type: err.name, msg: err.message, path: '', location: '' }],
  });
});

export default app;
