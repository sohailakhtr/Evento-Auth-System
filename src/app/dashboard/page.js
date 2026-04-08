import { getServerSession } from "next-auth/next";
import { option } from "@/api/auth/[...nextauth]/option";
export default async function dashboardPage() {
  const session = await getServerSession();
  return (
    <>
      <h1>dashboardPage</h1>
    </>
  );
}
