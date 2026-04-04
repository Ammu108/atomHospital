import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { NextRequest } from "next/server";

import { env } from "~/env";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (req: NextRequest) => {
	const resHeaders = new Headers();

	return createTRPCContext({
		headers: req.headers,
		resHeaders,
	});
};

const handler = (req: NextRequest) =>
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext: () => createContext(req),
		responseMeta({ ctx }) {
			if (env.NODE_ENV === "development") {
				console.log(
					"[auth][route] responseMeta set-cookie:",
					ctx?.resHeaders.get("set-cookie") ? "present" : "missing",
				);
			}

			return {
				headers: ctx?.resHeaders,
			};
		},
		onError:
			env.NODE_ENV === "development"
				? ({ path, error }) => {
						console.error(
							`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
						);
					}
				: undefined,
	});

export { handler as GET, handler as POST };
