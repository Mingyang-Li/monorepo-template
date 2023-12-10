import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { env } from './env';
import { userRoutes } from './routes/user.route';

const app = express();

app.use(bodyParser.json());

app.get('/api/health', (req: Request, res: Response) => {
  const data = 'ok';
  res.json(data);
});

app.use('/users', userRoutes);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}.`);
});
