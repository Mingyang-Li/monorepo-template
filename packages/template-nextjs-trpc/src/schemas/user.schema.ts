import { z } from 'zod';

export const CreateUserArgs = z.object({
  email: z
    .string({ required_error: 'Please provide an email' })
    .email('Please provide a valid email'),
  password: z
    .string({ required_error: 'Please provide a password' })
    .min(8, 'The password must be at least 8 characters long'),
  firstName: z.string({ required_error: 'Please provide first name' }),
  lastName: z.string({ required_error: 'Please provide last name' }),
});
