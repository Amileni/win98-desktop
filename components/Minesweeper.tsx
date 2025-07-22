'use client';

export default function Minesweeper() {
  return (
    <div style={{background: '#008080' }}>
      <iframe
        src="../minesweeper/index.html"
        style={{
          width: '280px',
          height: '320px',
          border: 'none',
          background: '#008080',
        }}
        title="Minesweeper"
      />
    </div>
  );
}