import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// Export middleware
export default withAuth(
    function middleware(req) {
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

// Specify protected routes
export const config = {
    matcher: [
        "/users/",
        "/users/:path*",
        "/onboarding",
        "/onboarding/:path*",
    ]
} 