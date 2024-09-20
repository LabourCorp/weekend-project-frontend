'use client'

import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const customerOnboarding = () => {
    const handleClick = () => {

    }
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-sm h-[500px] bg-white shadow-md rounded-lg flex flex-col">
                <CardHeader className="h-1/4">
                    <CardTitle className="text-xl">Let's get to know each other</CardTitle>
                    <CardDescription>
                        Enter your information
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <div className="grid gap-4 mb-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="Ram" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Robinson" required />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="enter complete address"
                                required
                                autoComplete='off'
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full mt-auto" onClick={() => handleClick()}>
                        Let's get started
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

{
    // enable location permission
    // fetch.post('/users',fnan,lname,'role'=customer, address{k:v(location(latitude,longitude))}, location(latitude,longitude), )
}
export default customerOnboarding