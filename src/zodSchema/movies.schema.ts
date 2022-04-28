import { z } from "zod";

export const moviesSchema = z.object({
   id: z.number().nonnegative(),
   title: z.string().nonempty(),
   year: z.number().nonnegative(),
   rating: z.number().optional(),
   genres: z.array(z.string()).optional(),
});
