import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/option";
import { redirect } from "next/navigation";

export default async function registerLayout(props) {
  const session = await getServerSession(options);
  if (session) {
    redirect("/dashboard");
  }

  return <>{props.children}</>;
}
