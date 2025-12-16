import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "10",
      title: "Sunday Brunch Meetup",
      description: "Casual networking with designers & developers",
      date: "2025-12-21",
      host: "Community Hub",
    },
    {
      id: "11",
      title: "Kubernetes Workshop",
      description: "Deep dive into container orchestration",
      date: "2025-12-23",
      host: "DevOps Circle",
    },
  ]);
}
