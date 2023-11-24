import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/trpc';

export const ExampleRoutes = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
