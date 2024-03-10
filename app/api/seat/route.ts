import { NextResponse } from "next/server";

const SeatData = [
  {id: 1, seatNum: "1a" },
  {id: 2, seatNum: "2a" },
  {id: 3, seatNum: "3a" },
  {id: 4, seatNum: "4a" },
  {id: 5, seatNum: "5a" },
  {id: 6, seatNum: "6a" },
  {id: 7, seatNum: "7a" },
  {id: 8, seatNum: "8a" },
  {id: 9, seatNum: "9a" },
  {id: 10, seatNum: "10a" },
  {id: 11, seatNum: "1b" },
  {id: 12, seatNum: "2b" },
  {id: 13, seatNum: "3b" },
  {id: 14, seatNum: "4b" },
  {id: 15, seatNum: "5b" },
  {id: 16, seatNum: "6b" },
  {id: 17, seatNum: "7b" },
  {id: 18, seatNum: "8b" },
  {id: 19, seatNum: "9b" },
  {id: 20, seatNum: "10b" },
  {id: 31, seatNum: "1c" },
  {id: 32, seatNum: "2c" },
  {id: 33, seatNum: "3c" },
  {id: 34, seatNum: "4c" },
  {id: 35, seatNum: "5c" },
  {id: 36, seatNum: "6c" },
  {id: 37, seatNum: "7c" },
  {id: 38, seatNum: "8c" },
  {id: 39, seatNum: "9c" },
  {id: 30, seatNum: "10c" },
  
];

export async function GET(request: Request) {
  return NextResponse.json(SeatData || []);
}

export async function POST(request: Request) {
  return NextResponse.json({ msg: "comming soon!" });
}
