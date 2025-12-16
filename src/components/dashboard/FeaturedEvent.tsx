"use client";

import { useInfiniteEvents } from "@/hooks/useInfiniteEvents";
import { EventCard } from "./EventCard";
import { useRef, useEffect } from "react";
import Link from "next/link";

export function FeaturedEventList() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteEvents();

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!loadMoreRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1 }
        );

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [hasNextPage, fetchNextPage]);

    return (
        <div className="space-y-6">
            {data?.pages.map((page, idx) => (
                <div key={idx} className="space-y-6">
                    {page.items.map((event: any) => (
                        <div
                            key={event.id}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg
                "
                        >
                            {/* IMAGE */}
                            <Link href={`/event/${event.id}`}  >
                                <EventCard {...event} showDetails={false} />
                            </Link>
                            {/* CONTENT */}
                            <div className="flex flex-col gap-3 px-5 py-4">
                                <Link href={`/event/${event.id}`} className="flex flex-col gap-3">

                                    <h1 className="heading-primary text-2xl font-semibold">
                                        {event.title}
                                    </h1>

                                    <p className="text-sm font-medium heading-primary ">
                                        {event.date}
                                    </p>



                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        A short, clean event description that builds interest
                                        without overexplaining.
                                    </p>
                                </Link>
                                {/* CTA */}
                                <div className="pt-3">
                                    <button className="btn-gradient-primary flex w-full px-[68px] py-2">
                                        Book Event
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}



            <div ref={loadMoreRef} className="h-12 flex justify-center items-center">
                {hasNextPage ? (
                    <span className="text-gray-500 text-sm">Loading more…</span>
                ) : (
                    <span className="text-gray-400 text-sm">No more events</span>
                )}
            </div>

            {isFetchingNextPage && <p className="text-center">Loading…</p>}
        </div>
    );
}
