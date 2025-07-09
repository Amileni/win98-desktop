import { DesktopIcon } from "@/types/icon";
import { IconType } from "@/types/iconType";
import { MouseEvent } from "react";

type IconProps = {
  icon: DesktopIcon;
  onDoubleClick: () => void;
};

export default function Icon({ icon, onDoubleClick }: IconProps) {
  const handleDoubleClick = (e: MouseEvent) => {
    if (icon.type === IconType.Redirect) {
      window.open(icon.target, "_blank");
    } else if (icon.type === IconType.Page) {
      onDoubleClick();
    }
  };

  return (
    <div className="icon" onDoubleClick={handleDoubleClick}>
      <img src={icon.imageUrl} alt={icon.title} width={48} height={48} />
      <div className="icon-title">{icon.title}</div>
    </div>
  );
}
