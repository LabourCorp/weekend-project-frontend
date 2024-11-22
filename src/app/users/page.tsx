'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../onboarding/loading'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
interface Users {
    id: number
    name: string
    username: string
    email: string
}

const Users = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login')
        },
    })

    const [data, setData] = useState<Users[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await res.json()
            setData(users)
            setLoading(false)
        }

        fetchData()
    }, [])

    // Show loading state while checking authentication or fetching data
    if (status === "loading" || loading) {
        return <Loading />
    }
    return (
        <div >
            <nav className='mb-8'>
                {/* <NavBar /> */}
            </nav>
            <h1>
                Users
            </h1>
            <ul>
                {
                    data.map((user) => (
                        <React.Fragment key={user.id}>
                            <li >{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.username}</li>
                        </React.Fragment>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users
