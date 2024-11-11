import { NextResponse} from "next/server";

const TimesData = [
  { id: 1, title: "12:00 PM" },
  { id: 2, title: "1:30 PM" },
  { id: 3, title: "2:00 PM" },
  { id: 4, title: "3:30 PM" },
  { id: 5, title: "4:00 PM" },
  { id: 6, title: "5:30 PM" },
  { id: 7, title: "6:30 PM" },
  { id: 8, title: "7:30 PM" },
  { id: 9, title: "8:30 PM" },
];
  export async function GET(request: Request) {
    return NextResponse.json(TimesData || []);
  }     
    export async function POST(request: Request) {
        return NextResponse.json({ msg: "comming soon!" });
    }