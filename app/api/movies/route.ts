import { NextResponse } from "next/server";

const MovieData = [
  {
    id: 1,
    title: "The last DJ",
    description:
      "A washed-up radio DJ gets one last chance to reclaim his glory.",
    image: "/lastdj.webp", // Fixed image path
  },
  {
    id: 2,
    title: "Revenge of the Jocks",
    description:
      "The tables turn when a group of underdog nerds take on their high school bullies.",
    image: "/AI Revenge of the Jocks.webp", // Fixed image path
  },
  {
    id: 3,
    title: "Space Ninja",
    description:
      "A rogue ninja fights for survival in a futuristic galaxy torn by war.",
    image: "/Spaceballs.webp", // Fixed image path
  },
  {
    id: 4,
    title: "Dragon for a Day",
    description:
      "A boy discovers he can transform into a dragon — but only until sunset.",
    image: "/dragon.webp", // Fixed image path
  },
  {
    id: 5,
    title: "Honey, the Kids are Gone",
    description:
      "Two parents rediscover their youth after their kids mysteriously vanish for a weekend.",
    image: "/kidsgone.webp", // Fixed image path
  },
  {
    id: 6,
    title: "Adventure in Softball",
    description:
      "A ragtag softball team fights for their first championship win.",
    image: "/ADventure in SoftBall.webp", // Fixed image path
  },
];

export async function GET(request: Request) {
  return NextResponse.json(MovieData || []);
}

export async function POST(request: Request) {
  return NextResponse.json({ msg: "Coming soon!" });
}
