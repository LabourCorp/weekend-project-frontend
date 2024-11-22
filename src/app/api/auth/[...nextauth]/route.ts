import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone", type: "text" },
                otp: { label: "OTP", type: "text" }
            },
            async authorize(credentials) {
                // For development, accept "123456" as valid OTP
                if (credentials?.otp === "123456") {
                    return {
                        id: "1",
                        phone: credentials.phone,
                        // Add any other user data you want to include
                    }
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.phone = user.phone
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.phone = token.phone as string
            }
            return session
        }
    }
})

export { handler as GET, handler as POST } 