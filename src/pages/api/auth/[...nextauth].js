import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
        // clientId:'539203247883-c42pe3ratq08mat7rb6meejoqekre0pe.apps.googleusercontent.com',
        // clientSecret:'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'
      }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)