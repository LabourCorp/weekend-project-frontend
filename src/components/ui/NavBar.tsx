'use client'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, ShoppingCart, Package, Settings, Users2, LineChart, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.1)] backdrop-blur-md border-b border-[rgba(255,255,255,0.2)] shadow-lg">

            {/* Mobile View (Hamburger Menu) */}
            <div className="flex justify-between items-center p-1 sm:hidden">
                <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="p-2">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-4 z-[100]">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/login" className="flex items-center gap-2" onClick={() => handleMenuClose()}>
                                <Home className="h-5 w-5" /> Login
                            </Link>
                            <Link href="/onboarding" className="flex items-center gap-2" onClick={() => handleMenuClose()}>
                                <ShoppingCart className="h-5 w-5" /> Onboarding
                            </Link>
                            <Link href="#" className="flex items-center gap-2" onClick={() => handleMenuClose()}>
                                <Package className="h-5 w-5" /> Products
                            </Link>
                            <Link href="#" className="flex items-center gap-2" onClick={() => handleMenuClose()}>
                                <Users2 className="h-5 w-5" /> Customers
                            </Link>
                            <Link href="#" className="flex items-center gap-2" onClick={() => handleMenuClose()}>
                                <LineChart className="h-5 w-5" /> Analytics
                            </Link>
                            <Link href="#" className="flex items-center gap-2" onClick={() => handleMenuClose()}>
                                <Settings className="h-5 w-5" /> Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                <Link href="#" className="mr-auto flex flex-col items-center">
                    <span className="text-2xl font-bold">labour.</span>
                </Link>
                <Link href="#" className="flex flex-col items-center p-2">
                    <ShoppingCart className="h-6 w-6" />
                </Link>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:flex justify-between items-center p-4">
                <nav className="flex w-full items-center">
                    {/* Branding on the left */}
                    <Link href="#" className="mr-auto">
                        <span className="text-2xl font-bold">labour.</span>
                    </Link>

                    {/* Menu items on the right */}
                    <div className="flex space-x-4 ml-auto">
                        <Link href="/login" className="flex items-center gap-2">
                            <Home className="h-5 w-5" /> Login
                        </Link>
                        <Link href="/onboarding" className="flex items-center gap-2">
                            <ShoppingCart className="h-5 w-5" /> Onboarding
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <Package className="h-5 w-5" /> Products
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <Users2 className="h-5 w-5" /> Customers
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <LineChart className="h-5 w-5" /> Analytics
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <Settings className="h-5 w-5" /> Settings
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <ShoppingCart className="h-5 w-5" /> Cart
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
