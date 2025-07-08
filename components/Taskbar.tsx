import "@/styles/desktop.css";
import Clock from './Clock';

export default function Taskbar() {
  return (
    <div className="taskbar">
      <button className="start">
        <img src="/icons/windows-0.png" alt="Start" />
        Start
      </button>
      <Clock />
    </div>
  );
}