type WindowProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Window({ title, children, onClose }: WindowProps) {
  return (
    <div className="window">
      <div className="title-bar">
        <span>{title}</span>
        <img src="windows/window-close.png" alt="Close" onClick={onClose}/>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
