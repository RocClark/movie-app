import { NextResponse} from "next/server";

const TimesData = [
    { id: 1, title: "12:00" },
    { id: 2, title: "1:30" },
    { id: 3, title: "2:00" },
    { id: 4, title: "3:30" },
    { id: 5, title: "4:00" },
    { id: 6, title: "5:30" },
    { id: 7, title: "6:30" },
    { id: 8, title: "7:30" },
    { id: 9, title: "8:30" },
  ];
  export async function GET(request: Request) {
    return NextResponse.json(TimesData || []);
  }     
    export async function POST(request: Request) {
        return NextResponse.json({ msg: "comming soon!" });
    }