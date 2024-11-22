'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import InputOTPForm from '../../components/ui/otp' // Import your OTP form component
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [reqOtp, setReqOtp] = useState(false)
    const [phone, setPhone] = useState("")

    // Redirect if already authenticated
    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/users/profile')
        }
    }, [status, router])

    // Zod schema for validating mobile number
    const FormSchema = z.object({
        mobile: z
            .string()
            .length(10, { message: "Mobile number must be exactly 10 digits." }) // Length validation for mobile number
            .regex(/^\d+$/, { message: "Mobile number must contain only digits." }), // Ensure only digits
    })

    // React Hook Form setup with Zod schema
    const {
        register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            mobile: "",
        },
    })

    // Handle mobile submission
    const onSubmit = async (data: { mobile: string }) => {
        try {
            // Mock OTP sending
            console.log('Simulating OTP send to:', data.mobile)
            // For development, we'll just set the states directly
            setPhone(data.mobile)
            setReqOtp(true)

            // In development, you can use a fixed OTP like "123456" for testing
            console.log('Development mode: Use "123456" as OTP')
        } catch (error) {
            console.error('Error:', error)
        }
    }

    // Handle OTP verification
    const handleOTPVerify = async (otp: string) => {
        try {
            // For development, accept "123456" as valid OTP
            const isValid = otp === "123456"

            if (isValid) {
                // Sign in using NextAuth credentials provider
                const result = await signIn('credentials', {
                    phone: phone,
                    otp: otp,
                    redirect: false, // Prevent automatic redirect
                })

                if (result?.error) {
                    console.error('Authentication failed:', result.error)
                    return false
                }

                // If authentication is successful, manually redirect
                console.log('OTP verified successfully')
                router.push('/onboarding')
                router.refresh() // Force a refresh to update the session
                return true
            } else {
                console.error('Invalid OTP')
                return false
            }
        } catch (error) {
            console.error('Error during OTP verification:', error)
            return false
        }
    }

    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Header with Brand Logo and Background Image */}
            <header className="relative w-full h-20 bg-white shadow-md z-10 flex items-center justify-between p-4">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/Whangaehu.svg"
                        alt="Background Image"
                        className="w-full h-full"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }} />
                </div>

                <div className="relative flex items-center justify-between w-full h-full">
                    <div className="text-5xl font-bold pl-2">
                        <Link href="/">
                            labour.
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="flex-grow flex items-center justify-center">
                <div className="mx-auto grid w-[350px] gap-6 bg-white p-6 rounded-lg shadow-lg">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            {!reqOtp ? "Enter your Phone no. below to login to your account" : "Enter the OTP sent to your phone"}
                        </p>
                    </div>

                    {!reqOtp ? (
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="1234567890"
                                    {...register("mobile")}
                                />
                                {errors.mobile && (
                                    <p className="text-red-500">{errors.mobile.message}</p>
                                )}
                            </div>

                            <Button type="submit" className="w-full">
                                Request OTP
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full"
                                onClick={() => signIn('google', { callbackUrl: '/users/profile' })}
                            >
                                Login with Google
                            </Button>
                        </form>
                    ) : (
                        <InputOTPForm
                            onVerify={handleOTPVerify}
                            redirectPath="/onboarding"
                        />
                    )}

                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
