import "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id?: string
            phone?: string
            name?: string | null
            email?: string | null
            image?: string | null
        }
    }

    interface User {
        id: string
        phone?: string
        name?: string
        email?: string
        image?: string
    }
} 