'use client'
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();
    const cards = [
        { id: 1, label: "I am a Customer", imgSrc: "/peep-94.svg", content: 'Hey, I want to hire people', route: '/onboarding/customerOnboarding' },
        { id: 2, label: "I am a Contractor", imgSrc: "/peep-85.svg", content: 'Hey, I have a team of people', route: '/onboarding/contractorOnboarding' },
        { id: 3, label: "I am an Architect", imgSrc: "/peep-17.svg", content: 'Hey, I make blueprints and stuff', route: '/onboarding/archietectOnboarding' },
        { id: 4, label: "I am a Labourer", imgSrc: "/peep-76.svg", content: 'Hey, I want to get hired', route: '/onboarding/labourOnboarding' },
    ];

    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardSelect = (id: number) => {
        setSelectedCard(id);
    };

    const handleSubmit = () => {
        const selectedCardInfo = cards.find(card => card.id === selectedCard);
        if (selectedCardInfo) {
            router.push(selectedCardInfo.route);
        } else {
            console.log("No card selected.");
        }
    };

    return (
        <div className='flex flex-col min-h-screen'>


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
                                <Image
                                    src={card.imgSrc}
                                    alt={card.label}
                                    fill
                                    sizes="100vw"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            {/* Right side - Card content */}
                            <div className="flex-grow flex flex-col justify-center">
                                <h3 className="text-lg font-semibold">{card.label}</h3>
                                <p className="text-gray-500 text-sm">{card.content}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                {/* Submit Button */}
                <Button onClick={handleSubmit} disabled={selectedCard === null}>
                    Let's go!
                </Button>

            </div>
        </div>
    );
}

export default Page;
