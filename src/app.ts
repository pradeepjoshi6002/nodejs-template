import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'this is my app' });
});

export default app;
