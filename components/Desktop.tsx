'use client';

import "@/styles/desktop.css";
import { useEffect, useState } from "react";
import { fetchIcons } from "@/lib/api";
import Icon from "./Icon";
import Window from "./Window";
import { DesktopIcon } from "@/types/icon";
import Taskbar from "@/components/Taskbar";

export default function Desktop() {
  const [icons, setIcons] = useState<DesktopIcon[]>([]);
  const [openApp, setOpenApp] = useState<DesktopIcon | null>(null);

  useEffect(() => {
    fetchIcons().then(setIcons);
  }, []);

  return (
    <div className="desktop">
      {icons.map((icon) => (
        <Icon
          key={icon.id}
          icon={icon}
          onDoubleClick={() => setOpenApp(icon)}
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
