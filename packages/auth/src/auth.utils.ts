import jwt from "jsonwebtoken";

type JWTPayload = {
	userId: string;
};

export function createToken(userId: string, secret: string) {
	return jwt.sign({ userId }, secret, { expiresIn: "7d" });
}

export function verifyToken(token: string, secret: string) {
	const decoded = jwt.verify(token, secret);

	if (typeof decoded === "string") {
		throw new Error("Invalid token payload");
	}

	return decoded as JWTPayload;
}
