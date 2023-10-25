import { z } from 'zod';

export const CreateUserArgsSchema = z.object({
  email: z
    .string({ required_error: 'Please provide an email' })
    .email('Please provide a valid email'),
  password: z
    .string({ required_error: 'Please provide a password' })
    .regex(
      new RegExp('.*[A-Z].*'),
      'Please include at least 1 uppercase character',
    )
    .regex(
      new RegExp('.*[a-z].*'),
      'Please include at least 1 lowercase character',
    )
    .regex(new RegExp('.*\\d.*'), 'Please include at least 1 number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character',
    )
    .min(8, 'The password must be at least 8 characters long'),
  firstName: z.string({ required_error: 'Please provide first name' }),
  lastName: z.string({ required_error: 'Please provide last name' }),
});
export type CreateUserArgs = z.infer<typeof CreateUserArgsSchema>;
