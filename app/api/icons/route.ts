import { NextResponse } from "next/server";
import { IconType } from "@/types/iconType";

export async function GET() {
  return NextResponse.json([
    {
      id: "1",
      title: "Nextcloud",
      imageUrl: "/icons/cloud.png",
      type: IconType.Redirect,
      target: "https://nuage.zozo-land.fr"
    },
    {
      id: "2",
      title: "GitHub",
      imageUrl: "/icons/icon-github.png",
      type: IconType.Redirect,
      target: "https://github.com/Amileni/win98-desktop"
    },
    {
      id: "3",
      title: "Poste de travail",
      imageUrl: "/icons/computer.png",
      type: IconType.Page
    },
    {
      id: "4",
      title: "Corbeille",
      imageUrl: "/icons/trash.png",
      type: IconType.Page
    }
  ]);
}
