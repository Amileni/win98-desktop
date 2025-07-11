'use client';

import "@/styles/desktop.css";
import { useEffect, useState } from "react";
import { fetchIcons } from "@/lib/api";
import Icon from "./Icon";
import Window from "./Window";
import { DesktopIcon } from "@/types/icon";
import { IconType } from "@/types/iconType";
import Taskbar from "@/components/Taskbar";
import { simulateLoadingCursor } from "@/utils/simulateLoadingCursor";

export default function Desktop() {
  const [icons, setIcons] = useState<DesktopIcon[]>([]);
  const [openApp, setOpenApp] = useState<DesktopIcon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);

  useEffect(() => {
    fetchIcons().then(setIcons);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isLoading) {
      body.classList.add("loading");
    } else {
      body.classList.remove("loading");
    }
  }, [isLoading]);

  const handleIconDoubleClick = (icon: DesktopIcon) => {
    setIsLoading(true); // active le curseur de chargement

    setTimeout(() => {
      setIsLoading(false); // désactive après 500ms

      if (icon.type === IconType.Redirect) {
        window.open(icon.target, "_blank");
      } else if (icon.type === IconType.Page) {
        setOpenApp(icon);
      }
    }, Math.random() * 500 + 500); // délai aléatoire entre 500 et 1000 ms
  };

  return (
    <div 
      className={`desktop ${isLoading ? 'loading' : ''}`}
      onClick={() => setSelectedIconId(null)}
    >
      {icons.map((icon) => (
        <Icon
          key={icon.id}
          icon={icon}
          isSelected={selectedIconId === icon.id}
          onClick={(e) => {
            e.stopPropagation(); // empêche la désélection
            setSelectedIconId(icon.id);
          }}
          onDoubleClick={(e) => {
            setSelectedIconId(null);
            handleIconDoubleClick(icon);}}
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
