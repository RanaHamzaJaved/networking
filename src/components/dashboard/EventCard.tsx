"use client";
import Image from "next/image";

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    image: string;
    showDetails?: boolean; // NEW: optional flag
    variant?: "default" | "featured"; // NEW

}

export function EventCard({
    title,
    date,
    location,
    image, variant,
    showDetails = true, // DEFAULT: show content
}: EventCardProps) {
    const isFeatured = variant === "featured";
    console.log({ image })
    return (
        <div className={`relative w-full overflow-hidden ${isFeatured
            ? "h-[380px] rounded-3xl"
            : "h-68 rounded-xl"
            }`}>
            {/* IMAGE */}
            <div
                className={`relative w-full ${isFeatured ? "h-[380px]" : "h-68"
                    }`}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-inherit"
                    priority
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 rounded-inherit bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                {/* TEXT (OPTIONAL) */}
                {showDetails && (
                    <div className="absolute bottom-10 left-6 right-6 text-white">
                        <h2 className="text-2xl font-semibold leading-tight">
                            {title}
                        </h2>
                        <p className="mt-2 text-sm opacity-90">
                            {date} · {location}
                        </p>
                    </div>
                )}


            </div>
        </div>
    );
}
