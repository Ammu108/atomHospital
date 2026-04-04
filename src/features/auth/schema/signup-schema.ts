import z from "zod";

export const signupSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.max(256, "Name must be at most 256 characters"),
	email: z.string().email(),
	password: z.string().min(6),
});
