"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter } from "next/navigation"

interface Props {
    onVerify?: (pin: string) => Promise<boolean>;
    redirectPath: string; // New prop for redirect path
}

export default function InputOTPForm({ onVerify, redirectPath }: Props) {
    const router = useRouter()

    const FormSchema = z.object({
        pin: z.string().min(6, {
            message: "Your one-time password must be 6 characters.",
        }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    async function handleSubmit({ pin }: z.infer<typeof FormSchema>) {
        setIsVerifying(true);
        try {
            let verified = false;
            if (typeof onVerify === 'function') {
                verified = await onVerify(pin);
            } else {
                console.warn('onVerify prop is not a function or not provided');
                // Default implementation
                verified = pin === '123456'; // Example: consider any pin as valid
            }
            setIsVerified(verified);
            if (verified) {
                router.push(redirectPath); // Redirect on successful verification
            } else {
                form.setError('pin', { type: 'manual', message: 'Invalid OTP. Please try again.' });
            }
        } finally {
            setIsVerifying(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6 mx-auto">
                <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>One-Time Password</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormDescription>
                                Please enter the one-time password sent to your phone.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" disabled={isVerifying}>
                    {isVerifying ? 'Verifying...' : 'Submit'}
                </Button>
            </form>
        </Form>
    )
}
