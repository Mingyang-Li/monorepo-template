import { ZodValidationPipe } from '@/pipes/zod-validation.pipe';
import { UserService } from '@/services/user.service';
import { Controller, Post, UsePipes } from '@nestjs/common';
import { z } from 'zod';

const CreateUserSchema = z.object({
  name: z.string({ required_error: 'Please provide a name' }),
  email: z
    .string({ required_error: 'Please provide an email' })
    .email('Please provide a valid email'),
});

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('')
  @UsePipes(new ZodValidationPipe(CreateUserSchema))
  public async createUser() {
    return await this.userService.createUser();
  }
}
