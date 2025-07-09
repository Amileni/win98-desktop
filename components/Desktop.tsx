'use client';

import "@/styles/desktop.css";
import { useEffect, useState } from "react";
import { fetchIcons } from "@/lib/api";
import Icon from "./Icon";
import Window from "./Window";
import { DesktopIcon } from "@/types/icon";
import { IconType } from "@/types/iconType";
import Taskbar from "@/components/Taskbar";

export default function Desktop() {
  const [icons, setIcons] = useState<DesktopIcon[]>([]);
  const [openApp, setOpenApp] = useState<DesktopIcon | null>(null);

  useEffect(() => {
    fetchIcons().then(setIcons);
  }, []);

  const handleIconDoubleClick = (icon: DesktopIcon) => {
    if (icon.type === IconType.Redirect) {
      window.open(icon.target, "_blank");
    } else if (icon.type === IconType.Page) {
      setOpenApp(icon);
    }
  };

  return (
    <div className="desktop">
      {icons.map((icon) => (
        <Icon
          key={icon.id}
          icon={icon}
          onDoubleClick={() => handleIconDoubleClick(icon)}
        />
      ))}

      {openApp && (
        <Window title={openApp.title} onClose={() => setOpenApp(null)}>
          <p>Contenu de {openApp.title}</p>
        </Window>
      )}
      <Taskbar />
    </div>
  );
}
