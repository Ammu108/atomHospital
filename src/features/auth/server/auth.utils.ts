import jwt from "jsonwebtoken";
import { env } from "~/env";

const SECRET = env.JWT_SECRET;

type JWTPayload = {
	userId: string;
};

export function createToken(userId: string) {
	return jwt.sign({ userId }, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
	const decoded = jwt.verify(token, SECRET);

	if (typeof decoded === "string") {
		throw new Error("Invalid token payload");
	}

	return decoded as JWTPayload;
}
