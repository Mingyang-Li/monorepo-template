import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { CreateUserArgs } from '@/schemas/user.schema';

export const UserRoutes = createTRPCRouter({
  create: publicProcedure.input(CreateUserArgs).mutation(({ input }) => {
    return input;
  }),
});
