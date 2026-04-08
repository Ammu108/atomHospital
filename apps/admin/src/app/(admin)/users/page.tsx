import { SiteHeader } from "~/components/site-header";
import { UsersTable } from "~/components/users-table";
import { api } from "~/trpc/server";

export default async function UsersPageRoute() {
  const users = await api.auth.getAllUsers();

  return (
    <>
      <SiteHeader title="All Users" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <UsersTable users={users} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
