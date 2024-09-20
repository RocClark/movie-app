import { NextResponse } from "next/server";

const BallResponse = [
"Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "I don't think so",
  "Absolutely!",
  "Not at all.",
  "Possibly.",
  "Try again soon.",
  "Without a doubt.",
  "Unlikely."
];

export async function GET(request: Request) {
  return NextResponse.json(BallResponse || []);
}

export async function POST(request: Request) {
  return NextResponse.json({ msg: "comming soon!" });
}
