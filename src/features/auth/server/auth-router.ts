import { TRPCError } from "@trpc/server";
import { serialize } from "cookie";
import { eq } from "drizzle-orm";
import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";
import { signupSchema } from "../schema/signup-schema";
import { createToken } from "./auth.utils";
import { authService } from "./auth-service";

export const authRouter = createTRPCRouter({
	signUp: publicProcedure
		.input(signupSchema)
		.mutation(async ({ input, ctx }) => {
			const userExists = await ctx.db.query.users.findFirst({
				where: eq(users.email, input.email),
			});

			if (userExists) {
				throw new TRPCError({
					code: "CONFLICT",
					message:
						"A user with this email already exists. Please use a different email.",
				});
			}

			const user = await authService.signUp(input);

			if (!user?.id) {
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Failed to create user",
				});
			}

			const token = createToken(user.id);

			const cookie = serialize("token", token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				path: "/",
				maxAge: 60 * 60 * 24 * 7,
			});

			ctx.resHeaders.append("set-cookie", cookie);

			if (process.env.NODE_ENV === "development") {
				console.log("[auth][signup] appended Set-Cookie header");
			}

			return { user };
		}),

	login: publicProcedure
		.input(z.object({ email: z.string(), password: z.string() }))
		.mutation(async ({ input, ctx }) => {
			const user = await authService.login(input.email, input.password);

			if (!user?.id) {
				throw new TRPCError({
					code: "UNAUTHORIZED",
					message: "Invalid user credentials",
				});
			}

			const token = createToken(user.id);

			const cookie = serialize("token", token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				path: "/",
				maxAge: 60 * 60 * 24 * 7,
			});

			ctx.resHeaders.append("set-cookie", cookie);

			if (process.env.NODE_ENV === "development") {
				console.log("[auth][login] appended Set-Cookie header");
			}

			return { user };
		}),

	logout: publicProcedure.mutation(async ({ ctx }) => {
		const cookie = serialize("token", "", {
			httpOnly: true,
			expires: new Date(0),
			path: "/",
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
		});

		ctx.resHeaders.append("set-cookie", cookie);

		if (process.env.NODE_ENV === "development") {
			console.log("[auth][logout] appended Set-Cookie header");
		}

		return { success: true };
	}),

	me: publicProcedure.query(async ({ ctx }) => {
		const authUser = ctx.user;

		if (!authUser) {
			return null;
		}

		const user = await ctx.db.query.users.findFirst({
			where: (u, { eq }) => eq(u.id, authUser.userId),
		});

		return user;
	}),
});
