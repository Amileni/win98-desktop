import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "1",
      title: "Poste de travail",
      imageUrl: "/icons/computer.png"
    },
    {
      id: "2",
      title: "Corbeille",
      imageUrl: "/icons/trash.png"
    }
  ]);
}
