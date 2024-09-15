import React from 'react'
import NavBar from '@/components/ui/NavBar'
interface Users {
    id: number
    name: string
    username: string
    email: string
}

const Users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: Users[] = await res.json()
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