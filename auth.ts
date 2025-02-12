import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GETHUB_ID,
      clientSecret: process.env.AUTH_GETHUB_SECRET,
    }),
    Google
  ],
})