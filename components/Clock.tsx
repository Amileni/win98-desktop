'use client';

import { useEffect, useState } from 'react';
import "@/styles/desktop.css";

export default function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const secondes = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${secondes}`);
    };

    update();
    const interval = setInterval(update, 500);
    return () => clearInterval(interval);
  }, []);

  return <div className="clock">{time}</div>;
}