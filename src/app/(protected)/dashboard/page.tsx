import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { FriendSuggestions } from "@/components/dashboard/FriendSuggestions";
import { FeaturedEventList } from "@/components/dashboard/FeaturedEvent";

export default function Dashboard() {
    return (
        <div className="bg-slate-50 min-h-screen">

            {/* FULL-WIDTH TOP CAROUSEL */}
            {/* <div className="w-full mb-8">
                <EventCarousel />
            </div> */}

            {/* GRID LAYOUT */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* LEFT STICKY PROFILE */}
                <div className="md:col-span-1">
                    <div className="sticky top-8">
                        <ProfileCard />
                    </div>
                </div>

                {/* CENTER FEED (FULL-PAGE SCROLL) */}
                <div className="md:col-span-2 space-y-6">
                    <FeaturedEventList />
                </div>

                {/* RIGHT STICKY FRIEND LIST */}
                <div className="md:col-span-1">
                    <div className="sticky top-8">
                        <FriendSuggestions />
                    </div>
                </div>

            </div>
        </div>
    );
}
