"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import NavBar from "@/components/ui/NavBar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Loading from "@/app/onboarding/loading"

interface UserLocation {
    latitude: number;
    longitude: number;
}
// New UploadPhoto component
function UploadPhoto({ onUpload, onSubmit }: { onUpload: (file: File) => void; onSubmit: (image: string) => void }) {
    const [image, setImage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null); // Store the file for submission
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setImage(reader.result);
                }
                setFile(selectedFile); // Store the file for submission
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = () => {
        if (file && image) {
            onUpload(file); // Call the onUpload prop with the file
            onSubmit(image); // Call the onSubmit prop with the image preview
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded" // Updated styling for consistency
            />
            {image && <img src={image} alt="Preview" className="mt-2 h-24 w-24" />}
            <Button
                onClick={handleSubmit}// Updated styling for consistency
            >
                Submit
            </Button>
        </div>
    );
}

export default function ProfilePage() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login')
        },
    })

    // Show loading state while checking authentication
    if (status === "loading") {
        return <Loading />
    }

    const fname = 'Piyush';
    const lname = 'Gaur';
    const phoneNumber = '+91 9876543210';
    const [avatarImage, setAvatarImage] = useState("/avatar.png"); // State for avatar image
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null); // State for user location
    const [documentsVal, setDocumentsVal] = useState<number>(0); // State for documents submitted
    const [photoVal, setPhotoVal] = useState<number>(0); // State for photo uploaded

    const handlePhotoUpload = (file: File) => {
        // Handle the uploaded file (e.g., send it to the server)
        console.log("Uploaded file:", file);
        setPhotoVal(100); // Update photoVal to indicate photo is uploaded
    };

    const handleImageSubmit = (image: string) => {
        setAvatarImage(image); // Update the avatar image with the uploaded image
    };

    const handleDocumentSubmit = () => {
        setDocumentsVal(2); // Update documentsVal to indicate documents are submitted
    };

    const handleLocationPermission = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude }); // Update state with location
                    console.log("Current location:", { latitude, longitude });
                },
                (error: GeolocationPositionError) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

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
                                <AvatarImage src={avatarImage} alt="User" />
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
                                            value: userLocation ? 100 : 30, // 100 if location is available, else 0
                                            fill: "var(--color-location)",
                                        },
                                        {
                                            activity: "photo",
                                            value: photoVal ? 100 : 20, // Use photoVal for the photo progress
                                            fill: "var(--color-photo)",
                                        },
                                        {
                                            activity: "documents",
                                            value: (documentsVal / 2) * 100, // Assuming 2 is the max for documents
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
                                    <Progress value={(documentsVal / 2) * 100} />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Photo</span>
                                        <span>{photoVal === 0 ? 'Upload Photo' : 'Verified'}</span>
                                    </div>
                                    <Progress value={photoVal ? 100 : 20} />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Location</span>
                                        <span>{userLocation ? 'Verified' : 'Permission not given'}</span>
                                    </div>
                                    <Progress value={userLocation ? 100 : 30} />
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

                    <Card>
                        <CardHeader>
                            <CardTitle>Upload Photo</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <UploadPhoto onUpload={handlePhotoUpload} onSubmit={handleImageSubmit} />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Location Permission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={handleLocationPermission}
                            >
                                Get Current Location
                            </Button>
                            {userLocation && (
                                <p className="mt-2">
                                    Location: {userLocation.latitude}, {userLocation.longitude}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
