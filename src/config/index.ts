import { config } from 'dotenv';

config();

const env = process.env;

export const Config = {
  PORT: env.PORT,
  NODE_ENV: env.NODE_ENV,
};
