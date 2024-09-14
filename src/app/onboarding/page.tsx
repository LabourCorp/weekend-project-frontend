'use client'
import NavBar from '@/components/ui/NavBar'
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'  // Adjust import based on your actual toast setup

const Page = () => {
    const cards = [
        { id: 1, label: "I am a User", imgSrc: "/peep-94.svg", content: 'hey i want to hire people' },
        { id: 2, label: "I am a Contractor", imgSrc: "/peep-85.svg", content: 'hey i have a team of people' },
        { id: 3, label: "I am an Architect", imgSrc: "/peep-17.svg", content: 'hey i make blueprints and stuff' },
        { id: 4, label: "I am a Labourer", imgSrc: "/peep-76.svg", content: 'hey i want to get hired' },
    ];
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardSelect = (id: number) => {
        setSelectedCard(id);
    };

    const handleSubmit = () => {
        if (selectedCard) {
            toast({
                title: "Card Selected",
                description: `You selected card ID: ${selectedCard}`,
                duration: 3000,
            });
        } else {
            toast({
                title: "No Selection",
                description: "Please select a card.",
                duration: 3000,
            });
        }
    };

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Navbar */}
            <NavBar />

            {/* Spacer (optional) */}
            <div className="h-16"></div>  {/* Adjust height for desired spacing */}

            {/* Card Container */}
            <div className='flex flex-col items-center justify-center space-y-6 flex-1 px-4'>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        onClick={() => handleCardSelect(card.id)}
                        className={`flex w-full max-w-md p-4 border rounded-lg shadow-md cursor-pointer transition-all 
              ${selectedCard === card.id ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                    >
                        <CardContent className="flex space-x-4 h-40">
                            {/* Left side - Image */}
                            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
                                <Image src={card.imgSrc} alt={card.label} layout="fill" objectFit="cover" />
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h3 className="text-lg font-semibold">{card.label}</h3>
                                <p className="text-gray-500 text-sm">{card.content}</p>  {/* Add card content here */}
                            </div>
                        </CardContent>
                    </Card>
                ))}
                {/* Submit Button */}
                <Button>
                    Let's go!
                </Button>
            </div>
        </div>
    )
}

export default Page
