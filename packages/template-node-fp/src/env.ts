import { z } from 'zod';
require('dotenv').config();

export const EnvSchema = z.object({
  DATABASE_URL: z.string().default('NONE'),
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

export const validateEnv = () => {
  const parsed = EnvSchema.safeParse(process.env);
  if (parsed.success === true) {
    return parsed.data;
  } else {
    throw parsed.error;
  }
};

export const env = validateEnv();
