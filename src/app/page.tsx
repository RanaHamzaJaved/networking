import { SidebarEventCarousel } from "@/components/dashboard/EventCarousel";
import { FeaturedEventList } from "@/components/dashboard/FeaturedEvent";
import { FriendSuggestions } from "@/components/dashboard/FriendSuggestions";
import { ProfileCard } from "@/components/dashboard/ProfileCard";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-[1480px] px-4 md:px-2 pt-6">

        {/* MOBILE: FEATURED CAROUSEL ON TOP */}
        <div className="mb-6 md:hidden">
          <SidebarEventCarousel />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* LEFT SIDEBAR */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-24 space-y-4">
              <ProfileCard />
              <FriendSuggestions />
            </div>
          </aside>

          {/* CENTER FEED */}
          <main className="md:col-span-6 space-y-6">
            <FeaturedEventList />
          </main>

          {/* RIGHT SIDEBAR (DESKTOP ONLY) */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-24 space-y-6">
              <SidebarEventCarousel />
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
