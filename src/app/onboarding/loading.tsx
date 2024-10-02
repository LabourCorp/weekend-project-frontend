import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
    return (
        <div className="flex items-center justify-center min-h-screen p-4">

            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}
