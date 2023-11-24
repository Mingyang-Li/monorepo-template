import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { CreateUserArgsSchema } from '@/schemas/user.schema';

export const UserRoutes = createTRPCRouter({
  create: publicProcedure.input(CreateUserArgsSchema).mutation((args) => {
    return args.input;
  }),
});
