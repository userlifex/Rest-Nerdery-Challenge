import express, { NextFunction, Request, Response } from 'express';

const app = express();
const PORT = 3000;
const ENVIRONMENT = 'development';

app.use(express.json());

app.use('/', (req: Request, res: Response) => {
  res.json({ name: 'foo', lastName: 'bar' });
});

app.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}`);
});
