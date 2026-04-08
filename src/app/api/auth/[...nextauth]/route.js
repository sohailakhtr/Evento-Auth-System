// import NextAuth from "next-auth";
// import { option } from "./option";
// const handler = NextAuth(option);

// import { matchesMiddleware } from "next/dist/shared/lib/router/router";

export { default } from "next-auth/middleware";
export const confifg = {
  matcher: ["/dashboard"],
};

