"use client";

import { Card, CardContent, CardHeader } from "@repo/ui";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Login from "~/features/auth/components/login";
import SignUp from "~/features/auth/components/signup";

const AuthPage = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const activeTab = searchParams.get("tab") === "signup" ? "signup" : "login";

	const onTabChange = (nextTab: "login" | "signup") => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("tab", nextTab);
		router.replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
			<Card className="flex w-full max-w-md">
				<CardHeader>
					{/* Tabs */}
					<div className="flex gap-4 border-border border-b">
						<button
							className={`pb-3 font-medium transition-colors ${
								activeTab === "login"
									? "border-primary border-b-2 text-primary"
									: "text-muted-foreground hover:text-foreground"
							}`}
							onClick={() => onTabChange("login")}
							type="button"
						>
							Login
						</button>
						<button
							className={`pb-3 font-medium transition-colors ${
								activeTab === "signup"
									? "border-primary border-b-2 text-primary"
									: "text-muted-foreground hover:text-foreground"
							}`}
							onClick={() => onTabChange("signup")}
							type="button"
						>
							Sign Up
						</button>
					</div>
				</CardHeader>

				<CardContent className="flex items-center justify-center py-4">
					{/* Content */}
					{activeTab === "login" ? <Login /> : <SignUp />}
				</CardContent>
			</Card>
		</div>
	);
};

export default AuthPage;
