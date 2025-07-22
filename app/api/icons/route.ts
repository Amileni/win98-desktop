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
      title: "Thingiverse",
      imageUrl: "/icons/thingiverse.png",
      type: IconType.Redirect,
      target: "https://www.thingiverse.com/amileni/designs"
    },
    {
      id: "3",
      title: "GitHub",
      imageUrl: "/icons/icon-github.png",
      type: IconType.Redirect,
      target: "https://github.com/Amileni/win98-desktop"
    },
    {
      id: "4",
      title: "Minesweeper",
      imageUrl: "/icons/mine.png",
      type: IconType.Page
    },
    {
      id: "5",
      title: "Desktop",
      imageUrl: "/icons/computer.png",
      type: IconType.Page
    },
    {
      id: "6",
      title: "Recycle Bin",
      imageUrl: "/icons/trash.png",
      type: IconType.Page
    }
  ]);
}
