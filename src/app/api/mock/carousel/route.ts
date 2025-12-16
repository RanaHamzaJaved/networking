import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const slides = Array.from({ length: 5 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    date: faker.date.future().toDateString(),
    img: faker.image.urlPicsumPhotos({ width: 1200, height: 400 }),
  }));

  return NextResponse.json({ slides });
}
