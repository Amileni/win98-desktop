'use client';

import { useRef, useEffect } from "react";

export default function Minesweeper() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = iframeRef.current;
    if (!frame) return;

    const handleLoad = () => {
      try {
        const body = frame.contentWindow?.document.body;
        if (body) {
          frame.style.height = body.scrollHeight + 'px';
          frame.style.width = body.scrollWidth + 'px';
        }
      } catch (e) {
        // Cross-origin iframe, cannot access content
      }
    };

    frame.addEventListener('load', handleLoad);
    return () => {
      frame.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div style={{ background: '#008080' }}>
      <iframe
        ref={iframeRef}
        src="../minesweeper/index.html"
        id="Iframe"
        style={{
          border: 'none',
          background: '#008080',
          width: '100%',
        }}
        title="Minesweeper"
      />
    </div>
  );
}