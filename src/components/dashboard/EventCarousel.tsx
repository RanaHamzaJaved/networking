"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { EventCard } from "@/components/dashboard/EventCard";
import { useCarouselData } from "@/hooks/useCarouselData";

export function SidebarEventCarousel() {
    const { data, isLoading } = useCarouselData();
    const slides = data?.slides ?? [];

    if (isLoading) {
        return (
            <div className="h-[420px] rounded-2xl bg-muted animate-pulse" />
        );
    }

    if (!slides.length) return null;

    return (
        <div
            className="
                rounded-3xl
                bg-white
                shadow-md
                border
                p-5
            "
        >
            {/* HEADER */}
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base font-semibold tracking-tight">
                    Featured Event
                </h3>
                <span className="text-xs text-muted-foreground">
                    Don’t miss this
                </span>
            </div>

            {/* CAROUSEL */}
            <Splide
                options={{
                    type: "loop",
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    drag: true,
                    gap: "1rem",
                }}
            >
                {slides.map((s: any) => (
                    <SplideSlide key={s.id}>
                        <div className="h-[380px]">
                            <EventCard
                                title={s.title}
                                date={s.date}
                                location={s.location ?? "Unknown"}
                                image={s.img}
                                showDetails={true}
                                variant="featured"

                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
