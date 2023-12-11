import { z } from 'zod';
import * as dotenv from 'dotenv';

dotenv.config();

const EnvSchema = z.object({
  PORT: z.coerce
    .number()
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(3001),
  NODE_ENV: z
    .enum(['local', 'development', 'test', 'staging', 'production'])
    .default('local'),
  COSMOS_DB_CONNECTION_STRING: z.string({
    required_error:
      'Please provide a Cosmos DB connection string as an environment variable',
  }),
});

export type Env = z.infer<typeof EnvSchema>;

export const validateEnvs = () => {
  const parsed = EnvSchema.safeParse(process.env);
  if (parsed.success === true) {
    return parsed.data;
  } else {
    throw parsed.error;
  }
};

export const env = validateEnvs();
