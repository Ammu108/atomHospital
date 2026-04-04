import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import type z from "zod";
import { db } from "~/server/db";
import { users } from "~/server/db/user";
import type { signupSchema } from "../schema/signup-schema";

export const authService = {
	async signUp(input: z.infer<typeof signupSchema>) {
		const hashedPassword = await bcrypt.hash(input.password, 10);

		const user = await db
			.insert(users)
			.values({
				name: input.name,
				email: input.email,
				password: hashedPassword,
			})
			.returning();

		return user[0];
	},

	async login(email: string, password: string) {
		const user = await db
			.select()
			.from(users)
			.where(eq(users.email, email))
			.limit(1);

		if (!user) {
			throw new Error("User not found");
		}

		const isPasswordValid = await bcrypt.compare(
			password,
			user[0]?.password || "",
		);

		if (!isPasswordValid) {
			throw new Error("Invalid password");
		}

		return user[0];
	},
};
