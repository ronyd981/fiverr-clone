import { z } from "zod";

const InputsSchema = z.object({
  title: z.string().min(5, "Title must have at least 5 characteres"),
  desc: z.string().min(10, "Description must have at least 10 characteres"),
  shortTitle: z.string().min(5, "Must have at least 5 characteres").nonempty(),
  shortDesc: z
    .string()
    .min(10, "Description must have at least 10 characteres"),
  deliveryTime: z
    .string()
    .regex(/^\d*$/)
    .nonempty("This field is required and must be a number"),
  price: z
    .string()
    .regex(/^\d*$/)
    .nonempty("This field is required and must be a number"),
  revisionNumber: z
    .string()
    .regex(/^\d*$/)
    .nonempty("This field is required and must be a number"),
});

export default InputsSchema;
