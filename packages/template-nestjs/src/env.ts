import { z } from 'zod';
require('dotenv').config();

export const EnvSchema = z.object({
  DATABASE_URL: z.string({ required_error: `Please include DATABASE_URL in your environment variables` }),
  PORT: z.coerce.number().positive().max(65536, `options.port should be >= 0 and < 65536`).default(3001),
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
