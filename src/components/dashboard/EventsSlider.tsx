"use client";

import { useMemo } from "react";
import type { EventItem } from "@/types/event";

const mockBookedEvents: EventItem[] = [
    { id: "1", title: "Tech Meetup 2025", date: "2025-12-20", location: "Karachi" },
    { id: "2", title: "Design Conf", date: "2026-01-05", location: "Lahore" },
    { id: "3", title: "Startup Summit", date: "2026-02-10", location: "Islamabad" },
];

export default function EventsSlider() {
    const events = useMemo<EventItem[]>(() => mockBookedEvents, []);

    return (
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-3">Your Booked Events</h2>

            <div className="flex gap-4 overflow-x-auto scrollbar-thin">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="min-w-[220px] bg-slate-800 rounded-lg p-3 border border-slate-700"
                    >
                        <h3 className="text-sm font-medium">{event.title}</h3>
                        <p className="text-xs text-slate-300 mt-1">{event.date}</p>

                        {event.location && (
                            <p className="text-xs text-slate-400">{event.location}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
