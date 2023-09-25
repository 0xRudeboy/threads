import * as z from "zod";

export const UserValidation = z.object({
  // can add error messages  within the argument as such
  // name: z.string().min(3, { message: "Minimum 3 characters" }).max(30),

  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
