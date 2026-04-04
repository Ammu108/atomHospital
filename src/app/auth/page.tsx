import { Suspense } from "react";
import AuthPage from "./auth-screen";

const Page = () => {
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<AuthPage />
			</Suspense>
		</main>
	);
};

export default Page;
