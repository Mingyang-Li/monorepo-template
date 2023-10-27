import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().positive().default(7777),
  DB_URL: z
    .string()
    .nonempty('Please enter a database URL into your .env file'),
});

export type Env = z.infer<typeof EnvSchema>;

export const validate = (args: Record<string, unknown>) => {
  const parsed = EnvSchema.safeParse(args);
  if (parsed.success === false) {
    throw parsed.error;
  } else {
    return parsed.data;
  }
};
