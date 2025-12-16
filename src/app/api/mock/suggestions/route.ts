import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: "100", name: "Ali Raza", mutualCount: 6 },
    { id: "101", name: "Sara Khan", mutualCount: 2 },
    { id: "102", name: "Bilal Ahmed", mutualCount: 4 },
  ]);
}
