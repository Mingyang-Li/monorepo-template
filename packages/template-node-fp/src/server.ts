import { env } from './env';
import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = env.PORT;

app.use(express.json());
app.get('/api/health', (req: Request, res: Response) => {
  const data = 'ok';
  res.json(data);
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}. Access it via http://localhost:${port}/api/health`,
  );
});
