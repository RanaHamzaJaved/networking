import { EventItem } from "@/types/event";

const mockEvents: EventItem[] = [
    {
        id: "1",
        title: "Sunday Brunch Meetup",
        description: "Casual networking with devs and designers.",
        date: "2025-12-21",
        host: "Community Hub",
    },
    {
        id: "2",
        title: "Kubernetes Workshop",
        description: "Deep dive on container orchestration.",
        date: "2025-12-23",
        host: "DevOps Circle",
    },
];

export default function EventsFeed() {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-3">Events for you</h2>
            <div className="space-y-3">
                {mockEvents.map((event) => (
                    <article
                        key={event.id}
                        className="bg-slate-800 border border-slate-700 rounded-lg p-3"
                    >
                        <h3 className="text-sm font-semibold">{event.title}</h3>
                        <p className="text-xs text-slate-300 mt-1">{event.description}</p>
                        <div className="flex justify-between items-center mt-2 text-xs text-slate-400">
                            <span>{event.date}</span>
                            <span>Hosted by {event.host}</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
