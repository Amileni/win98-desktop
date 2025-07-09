import { DesktopIcon } from "@/types/icon";

type IconProps = {
  icon: DesktopIcon;
  onDoubleClick: () => void;
};

export default function Icon({ icon, onDoubleClick }: IconProps) {
  return (
    <div className="icon" onDoubleClick={onDoubleClick}>
      <img src={icon.imageUrl} alt={icon.title} width={48} height={48} />
      <div className="icon-title">{icon.title}</div>
    </div>
  );
}
