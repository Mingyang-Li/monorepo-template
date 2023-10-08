import { env } from './env';
import * as express from 'express';
import { Request, Response } from 'express';
import * as C from "./controllers/user.controller";

const app = express();
const port = env.PORT;

app.use(express.json());
app.get('/api/health', (req: Request, res: Response) => {
  const data = 'ok';
  res.json(data);
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${JSON.stringify(C.CreateUserReqBodySchema)}. Access it via http://localhost:${port}/api/health`,
  );
});
