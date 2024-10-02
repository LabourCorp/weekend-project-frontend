'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
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

const archietectOnboarding = () => {
    const [step, setStep] = useState(1)
    const router = useRouter()

    const FormSchema1 = z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        aadhar: z.string().length(12, { message: "Aadhar number must be exactly 12 digits." })
            .regex(/^\d+$/, { message: "Aadhar number must contain only digits." }),
    })

    const FormSchema2 = z.object({
        phone: z.string().min(10, "Phone number must be at least 10 digits"),
        email: z.string().email("Invalid email address"),
    })

    const form1 = useForm({
        resolver: zodResolver(FormSchema1),
        defaultValues: { firstName: "", lastName: "", aadhar: "" },
    })

    const form2 = useForm({
        resolver: zodResolver(FormSchema2),
        defaultValues: { phone: "", email: "" },
    })

    const onSubmit1 = (data: z.infer<typeof FormSchema1>) => {
        console.log("Step 1 data:", data)
        setStep(2)
    }

    const handleVerify = async (pin: string) => {
        console.log("Verifying OTP:", pin)
        const isValid = await new Promise<boolean>((resolve) => {
            setTimeout(() => resolve(pin === "123456"), 1000)
        })
        // if (isValid) {
        //     setStep(3)
        // }
        return isValid
    }

    // const onSubmit2 = (data: z.infer<typeof FormSchema2>) => {
    //     console.log("Step 3 data:", data)
    //     // Here you would typically send all collected data to your backend
    //     router.push('/archietect/jobs')
    // }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-sm h-[600px] bg-white shadow-md rounded-lg flex flex-col">
                <CardHeader className="h-1/4">
                    <CardTitle className="text-xl">Let's get to know each other</CardTitle>
                    <CardDescription>
                        {step === 1 && "Enter your basic information"}
                        {step === 2 && "Verify your identity"}
                        {/* {step === 3 && "Complete your profile"} */}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    {step === 1 && (
                        <form onSubmit={form1.handleSubmit(onSubmit1)} className="flex-grow flex flex-col">
                            <div className="grid gap-4 mb-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input id="first-name" placeholder="Ram" required {...form1.register('firstName')} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input id="last-name" placeholder="Robinson" required {...form1.register('lastName')} />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="aadhar">Aadhar Card Number</Label>
                                    <Input
                                        id="aadhar"
                                        type="text"
                                        placeholder="123456789012"
                                        {...form1.register('aadhar')}
                                        required
                                        autoComplete='off'
                                    />
                                    {form1.formState.errors.aadhar && <p className="text-red-500">{form1.formState.errors.aadhar.message}</p>}
                                </div>
                            </div>
                            <Button type="submit" className="w-full mt-auto">
                                Next
                            </Button>
                        </form>
                    )}
                    {step === 2 && (
                        <InputOTPForm onVerify={handleVerify} redirectPath="/archietect/jobs" />
                    )}
                    {/* {step === 3 && (
                        <form onSubmit={form2.handleSubmit(onSubmit2)} className="flex-grow flex flex-col">
                            <div className="grid gap-4 mb-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" {...form2.register('phone')} required />
                                    {form2.formState.errors.phone && (
                                        <p className="text-red-500">{form2.formState.errors.phone.message}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" {...form2.register('email')} required />
                                    {form2.formState.errors.email && (
                                        <p className="text-red-500">{form2.formState.errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                            <Button type="submit" className="w-full mt-auto">
                                Complete Registration
                            </Button>
                        </form>
                    )} */}
                </CardContent>
            </Card>
        </div>
    )
}

export default archietectOnboarding