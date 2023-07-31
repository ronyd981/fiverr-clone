import { z } from "zod";

const MessageSchema = z.object({
  desc: z.string().min(1, ""),
});

export default MessageSchema;
