import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email({ message: "Email address is invalid" }),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, {
      message:
        "Mobile number is invalid",
    })
    .nullable(),
  terms_consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
  marketing_consent: z.boolean(),
});

export type IFormData = z.infer<typeof waitlistSchema>;
