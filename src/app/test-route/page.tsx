import { auth } from "@/auth";
import WhoAmIServerAction from "@/component/auth/who-am-i.client";

export default async function Page() {
  const session = await auth();

  async function onGetUserAction() {
    "use server";
    const session = await auth();
    return session?.user?.name ?? null;
  }

  return (
    <main>
      <h1>Test Route</h1>
      <div>User: {session?.user?.name}</div>
      <WhoAmIServerAction onGetUserAction={onGetUserAction} />
    </main>
  );
}
