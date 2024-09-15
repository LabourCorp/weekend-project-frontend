import React from 'react'
import Link from "next/link"

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

const userOnboarding = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <Card className="max-w-sm h-80 mx-auto bg-white shadow-md rounded-lg">
                <CardHeader>
                    <CardTitle className="text-xl">Let's get to know each other</CardTitle>
                    <CardDescription>
                        Enter your information
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
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
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                autoComplete='off'
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Let's get started
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


export default userOnboarding