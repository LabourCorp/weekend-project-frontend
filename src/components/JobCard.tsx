'use client';

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';

interface JobProps {
    title: string;
    description: string;
    location: string;
    payRate: string;
    jobId: string;
    badges: string[];
}

const JobCard: React.FC<JobProps> = ({ title, description, location, payRate, jobId, badges }) => {
    const [applied, setApplied] = useState(false);

    const handleApply = () => {
        // You can add your logic for applying to the job here
        setApplied(true);
        alert(`You have applied to the job: ${jobId}`);
    }

    const badgeColors = [
        "bg-zinc-900",
        "bg-blue-900",
        "bg-green-900",
        "bg-purple-900",
        "bg-yellow-900",
        "bg-red-900",
        "bg-pink-400",
    ];

    return (
        <Card className="max-w-md mx-auto my-1 shadow-lg">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                <CardDescription>{location} - {payRate}/hour</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {badges.map((bd, index) => (
                        <Badge
                            key={index}
                            className={`${badgeColors[index % badgeColors.length]}`}
                        >
                            {bd}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={handleApply} disabled={applied}>
                    {applied ? "Applied" : "Apply for Job"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
