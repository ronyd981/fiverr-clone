import { z } from "zod";

const SearchSchema = z.object({
  search: z.string().min(1, "This field is required"),
});

export default SearchSchema;
