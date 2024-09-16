'use client'

import React, { useState } from 'react'

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
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import InputOTPForm from '@/components/ui/otp'

const labourOnboarding = () => {
    const [reqOtp, setReqOtp] = useState(false)

    const FormSchema = z.object({
        aadhar: z
            .string()
            .length(12, { message: "Aadhar number must be exactly 12 digits." }) // Length validation for aadhar number
            .regex(/^\d+$/, { message: "Aadhar number must contain only digits." }), // Ensure only digits
    })

    const {
        register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            aadhar: "",
        },
    })

    const onSubmit = (data: { aadhar: string }) => {
        setReqOtp(true) // Show the OTP form when the Aadhar number is valid
    }

    const handleClick = () => {
        // Add your click handling logic here
        console.log("Button clicked")
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-sm h-[600px] bg-white shadow-md rounded-lg flex flex-col">
                <CardHeader className="h-1/4">
                    <CardTitle className="text-xl">Let's get to know each other</CardTitle>
                    <CardDescription>
                        Enter your information
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-grow flex flex-col">
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
                                <Label htmlFor="aadhar">Aadhar Card Number</Label>
                                <Input
                                    id="aadhar"
                                    type="text"
                                    placeholder="123456789012"
                                    {...register('aadhar')}
                                    required
                                    autoComplete='off'
                                />
                                {errors.aadhar && <p className="text-red-500">{errors.aadhar.message}</p>}
                            </div>
                        </div>
                        <Button type="submit" className="w-full mt-auto">
                            Let's get started
                        </Button>
                    </form>
                    {reqOtp && (
                        <div className="mt-4">
                            <InputOTPForm route="/labour/jobs" />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default labourOnboarding