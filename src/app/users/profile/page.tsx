"use client"

import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import NavBar from "@/components/ui/NavBar"


export default function ProfilePage() {
    const fname = 'Piyush';
    const lname = 'Gaur';
    const documentsVal = 2;
    const locationVal = 1
    const photoVal = 1
    const phoneNumber = '+91 9876543210'

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-6 mt-20">

                <div className="grid gap-6 md:grid-cols-2">
                    <Card >
                        <CardHeader>
                            <CardTitle>User Profile</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center space-x-4">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/avatar.png" alt="User" />
                                <AvatarFallback>{fname.charAt(0).toUpperCase() + lname.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-2xl font-bold">{fname + ' ' + lname}</h2>
                                <p className="text-gray-500">{phoneNumber}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col md:flex-row items-center justify-between">
                            <ChartContainer
                                config={{
                                    documents: {
                                        label: "Documents",
                                        color: "hsl(var(--chart-1))",
                                    },
                                    photo: {
                                        label: "Photo",
                                        color: "hsl(var(--chart-2))",
                                    },
                                    location: {
                                        label: "Location",
                                        color: "hsl(var(--chart-3))",
                                    },
                                }}
                                className="mx-auto aspect-square w-full max-w-[50%] md:max-w-[40%]"
                            >
                                <RadialBarChart
                                    margin={{
                                        left: -10,
                                        right: -10,
                                        top: -10,
                                        bottom: -10,
                                    }}
                                    data={[
                                        {
                                            activity: "location",
                                            value: locationVal === 0 ? 78 : 100,
                                            fill: "var(--color-location)",
                                        },
                                        {
                                            activity: "photo",
                                            value: photoVal === 0 ? 83 : 100,
                                            fill: "var(--color-photo)",
                                        },
                                        {
                                            activity: "documents",
                                            value: documentsVal / 2 * 100,
                                            fill: "var(--color-documents)",
                                        },
                                    ]}
                                    innerRadius="20%"
                                    barSize={24}
                                    startAngle={90}
                                    endAngle={450}
                                >
                                    <PolarAngleAxis
                                        type="number"
                                        domain={[0, 100]}
                                        dataKey="value"
                                        tick={false}
                                    />
                                    <RadialBar dataKey="value" background cornerRadius={5} />
                                </RadialBarChart>
                            </ChartContainer>
                            <div className="w-full md:w-1/2 space-y-4 mt-4 md:mt-0">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Documents</span>
                                        <span>{documentsVal === 2 ? 'Verified' : (documentsVal === 0 ? 'Documents not provided' : 'Submitted')}</span>
                                    </div>
                                    <Progress value={documentsVal / 2 * 100} />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Photo</span>
                                        <span>{photoVal === 0 ? 'Upload Photo' : 'Verified'}</span>
                                    </div>
                                    <Progress value={photoVal === 0 ? 83 : 100} />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Location</span>
                                        <span>{locationVal === 0 ? 'Permission not given' : 'Verified'}</span>
                                    </div>
                                    <Progress value={locationVal === 0 ? 78 : 100} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{fname + ' ' + lname}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900">john.doe@example.com</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{phoneNumber}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                                    <dd className="mt-1 text-sm text-gray-900">New York, NY</dd>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
