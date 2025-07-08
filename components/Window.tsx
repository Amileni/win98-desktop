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
        <button onClick={onClose}>X</button>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
