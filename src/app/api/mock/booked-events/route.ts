import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "1",
      title: "Tech Meetup 2025",
      date: "2025-12-20",
      location: "Karachi",
    },
    {
      id: "2",
      title: "Design Conference 2026",
      date: "2026-01-05",
      location: "Lahore",
    },
    {
      id: "3",
      title: "Startup Summit 2026",
      date: "2026-02-10",
      location: "Islamabad",
    },
  ]);
}
