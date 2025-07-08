import { DesktopIcon } from "@/types/icon";

export async function fetchIcons(): Promise<DesktopIcon[]> {
  const res = await fetch("/api/icons");
  return res.json();
}
