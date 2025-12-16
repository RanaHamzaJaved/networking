"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    Bell,
    CalendarDays,
    Home,
    MessageSquareText,
    Search,
    Settings,
    User,
} from "lucide-react";

type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const NAV: NavItem[] = [
    { label: "Home", href: "/dashboard", icon: <Home className="h-5 w-5" /> },
    {
        label: "Events",
        href: "/dashboard/events",
        icon: <CalendarDays className="h-5 w-5" />,
    },
    {
        label: "Messages",
        href: "/dashboard/messages",
        icon: <MessageSquareText className="h-5 w-5" />,
    },
    { label: "Alerts", href: "/dashboard/alerts", icon: <Bell className="h-5 w-5" /> },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-3 md:px-6">
                {/* Brand */}
                <Link href="/dashboard" className="flex items-center gap-2 shrink-0">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-semibold">
                        S
                    </div>
                    <div className="hidden md:block leading-tight">
                        <p className="text-sm font-semibold">Social</p>
                        <p className="text-xs text-muted-foreground -mt-0.5">Events</p>
                    </div>
                </Link>

                {/* Search */}
                <div className="flex-1">
                    <div className="relative max-w-xl">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search events, people, locations..."
                            className="pl-9 rounded-xl"
                        />
                    </div>
                </div>

                {/* Nav (desktop) */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV.map((item) => {
                        const active =
                            pathname === item.href || pathname?.startsWith(item.href + "/");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition",
                                    active
                                        ? "bg-muted text-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <span className={cn("transition", active ? "" : "opacity-80")}>
                                    {item.icon}
                                </span>
                                <span className="hidden lg:inline">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                    <Button
                        variant="secondary"
                        className="hidden sm:inline-flex rounded-xl"
                    >
                        Create Event
                    </Button>

                    {/* Profile */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-muted transition">
                                <Avatar className="h-8 w-8">
                                    {/* apni image later wire kar lena */}
                                    <AvatarImage src="" alt="User" />
                                    <AvatarFallback className="text-xs">AA</AvatarFallback>
                                </Avatar>
                                <div className="hidden md:block text-left leading-tight">
                                    <p className="text-sm font-medium">Adil</p>
                                    <p className="text-xs text-muted-foreground -mt-0.5">
                                        View profile
                                    </p>
                                </div>
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-56 rounded-xl">
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/profile" className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Profile
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/settings" className="flex items-center gap-2">
                                    <Settings className="h-4 w-4" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Mobile nav (bottom row inside header) */}
            <div className="md:hidden border-t">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-1">
                    {NAV.map((item) => {
                        const active =
                            pathname === item.href || pathname?.startsWith(item.href + "/");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs transition",
                                    active
                                        ? "bg-muted text-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
