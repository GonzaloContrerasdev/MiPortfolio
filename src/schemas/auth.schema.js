import { object, z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8)
    .max(20),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "invalid email",
    }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "password too short",
    }),
});
