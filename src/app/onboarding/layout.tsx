'use client'

import NavBar from '@/components/ui/NavBar';
import React from 'react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <main className='flex-1 pt-16'> {/* Adjust padding-top based on NavBar height */}
                {children}
            </main>
        </div>
    );
}
