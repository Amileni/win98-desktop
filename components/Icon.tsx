import { DesktopIcon } from "@/types/icon";
import { IconType } from "@/types/iconType";
import { MouseEvent } from "react";

type IconProps = {
  icon: DesktopIcon;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onDoubleClick: (e: React.MouseEvent) => void;
};

export default function Icon({ icon, isSelected, onClick, onDoubleClick }: IconProps) {

  return (
    <div 
      className={`icon ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <img src={icon.imageUrl} alt={icon.title} width={48} height={48} />
      <div className="icon-title">{icon.title}</div>
    </div>
  );
}
