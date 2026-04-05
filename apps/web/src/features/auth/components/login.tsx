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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";

const Login = () => {
	const router = useRouter();
	const utils = api.useUtils();

	const login = api.auth.login.useMutation({
		onSuccess: async () => {
			await utils.auth.me.invalidate();
			console.log("user logged in successfully.");
			router.push("/");
		},
		onError: (error) => {
			console.error("Login failed:", error);
		},
	});

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login.mutate(form);
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Login to your account</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								placeholder="m@example.com"
								required
								type="email"
								value={form.email}
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<Link
									className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									href="#"
								>
									Forgot your password?
								</Link>
							</div>
							<Input
								id="password"
								onChange={(e) => setForm({ ...form, password: e.target.value })}
								required
								type="password"
								value={form.password}
							/>
						</div>
						<Button className="w-full" onClick={handleSubmit} type="submit">
							Login
						</Button>

						{login.error && (
							<div className="rounded-md bg-destructive/10 p-2">
								<p className="text-destructive text-sm">
									Login failed: {login.error.message}
								</p>
							</div>
						)}
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default Login;
