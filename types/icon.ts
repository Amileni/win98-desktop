import { IconType } from "./iconType";

export type DesktopIcon = {
  id: string;
  title: string;
  imageUrl: string;
  type: IconType;
  target: string;
  appComponent?: string;
};