import { z } from "zod";

const RegisterSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  country: z.string().nonempty("This field is required"),
  phone: z
    .string()
    .regex(/^\d*$/, "This field is required and must be a number"),
  desc: z.string().optional(),
});

export default RegisterSchema;
