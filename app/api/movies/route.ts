import { NextResponse } from "next/server";

const MovieData = [
  { id: 1, title: "The last DJ" },
  { id: 2, title: "Revenge of the Jocks" },
  { id: 3, title: "Space Ninja" },
  { id: 4, title: "Dragon for a Day" },
  { id: 5, title: "Honey the kids are gone" },
  { id: 6, title: "Adventure in solfball" },
];

export async function GET(request: Request) {
  return NextResponse.json(MovieData || []);
}

export async function POST(request: Request) {
  return NextResponse.json({ msg: "comming soon!" });
}
