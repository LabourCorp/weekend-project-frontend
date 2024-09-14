'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import InputOTPForm from './otp' // Import your OTP form component

export default function Login() {
    const [reqOtp, setReqOtp] = useState(false)

    const handleOtpSubmit = () => {
        setReqOtp(true) // Show the OTP form when clicked
    }

    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Header with Brand Logo and Background Image */}
            <header className="relative w-full h-20 bg-white shadow-md z-10 flex items-center justify-between p-4">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/Whangaehu.svg" // Replace with your actual background image path
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                </div>

                {/* Header Content */}
                <div className="relative flex items-center justify-between w-full h-full">
                    <div className="text-5xl font-bold pl-2">
                        <Link href="/">
                            <a>labour.</a> {/* Added <a> tag for accessibility */}
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

                    {!reqOtp ? (  // Conditionally render based on reqOtp state
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="1234-567-890"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full" onClick={handleOtpSubmit}>
                                Request OTP
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </div>
                    ) : (
                        <InputOTPForm /> // Show OTP form when OTP is requested
                    )}

                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
