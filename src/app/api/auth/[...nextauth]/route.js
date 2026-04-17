import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import DBconnect from "@/lib/db";
import User from "@/lib/models/user";
import { passwordCheck } from "@/components/utils";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      async authorize(credentials) {
        await DBconnect();

        const user = await User.findOne({
          email: credentials.email,
        });

        if (!user) return null;

        const ok = await passwordCheck(credentials.password, user.password);

        if (!ok) return null;

        return {
          id: user._id,
          email: user.email,
        };
      },
    }),
  ],

  pages: {
    signIn: "/register",
  },
});

export { handler as GET, handler as POST };
