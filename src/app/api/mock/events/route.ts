import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

// MOCKED EVENTS — USE ANY DATA YOU WANT
// Generate 100 fake events
const EVENTS = Array.from({ length: 100 }).map(() => ({
  id: faker.number.int({ min: 1, max: 999999 }),
  title: faker.company.catchPhrase(),
  date: faker.date.future().toDateString(),
  location: `${faker.location.city()}, ${faker.location.state()}`,
  image: faker.image.urlPicsumPhotos({ width: 800, height: 600 }), // RANDOM IMAGE
}));

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);

  const perPage = 5;
  const start = (page - 1) * perPage;

  const items = EVENTS.slice(start, start + perPage);

  return NextResponse.json({
    items,
    nextPage: start + perPage < EVENTS.length ? page + 1 : null,
  });
}
