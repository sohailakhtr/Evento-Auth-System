import { getServerSession } from "next-auth/next";
import { option } from "@/app/api/auth/[...nextauth]/option";
export default async function DashboardPage() {
  const session = await getServerSession(option);
  console.log(session);

  return (
    <>
      <h1>DashboardPage</h1>
    </>
  );
}
