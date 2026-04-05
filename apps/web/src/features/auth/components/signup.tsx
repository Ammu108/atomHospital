import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
	Label,
} from "@repo/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";

function getReadableErrorMessage(rawMessage: string) {
	if (!rawMessage) {
		return "Signup failed. Please try again.";
	}

	try {
		const parsed = JSON.parse(rawMessage) as Array<{ message?: string }>;
		if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]?.message) {
			return parsed[0].message;
		}
	} catch {
		// Non-JSON error message; use as-is.
	}

	return rawMessage;
}

const SignUp = () => {
	const router = useRouter();
	const utils = api.useUtils();

	const signUp = api.auth.signUp.useMutation({
		onSuccess: async () => {
			await utils.auth.me.invalidate();
			console.log("user created successfully.");
			router.push("/");
		},
		onError: (error) => {
			console.error("Signup failed:", error);
		},
	});

	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		signUp.mutate(form);
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Sign up for an account</CardTitle>
				<CardDescription>
					Enter your email below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="name">Full Name</Label>
							<Input
								id="name"
								onChange={(e) => setForm({ ...form, name: e.target.value })}
								placeholder="John Doe"
								required
								type="text"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								placeholder="m@example.com"
								required
								type="email"
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
							</div>
							<Input
								id="password"
								onChange={(e) => setForm({ ...form, password: e.target.value })}
								required
								type="password"
							/>
						</div>
						<Button className="w-full" type="submit">
							Sign UP
						</Button>
						{signUp.error && (
							<div className="rounded-md bg-destructive/10 p-2">
								<p className="text-destructive text-sm">
									sign up failed:{" "}
									{getReadableErrorMessage(signUp.error.message)}
								</p>
							</div>
						)}
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default SignUp;
