import { DashboardPage } from "~/components/dashboard-page";
import { LoginPage } from "~/components/login-page";
import { api } from "~/trpc/server";

export default async function Page() {
  const userAdmin = await api.auth.me();

  if (!userAdmin || userAdmin.role !== "admin") {
    return <LoginPage />;
  }

  return <DashboardPage />;
}
