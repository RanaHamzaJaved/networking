import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: "u1",
    name: "Adil Ali",
    bio: "Software Engineer • Social networking enthusiast",
    avatarUrl: "",
    stats: {
      friends: 128,
      events: 14,
    },
  });
}
