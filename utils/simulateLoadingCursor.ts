export function simulateLoadingCursor(
  onComplete: () => void,
  options?: { min?: number; max?: number }
) {
  const cursors = ['wait', 'progress', 'default'];
  const count = Math.floor(Math.random() * 3) + 3;
  let current = 0;

  const run = () => {
    if (current >= count) {
      document.body.style.cursor = 'default';
      onComplete();
      return;
    }

    const nextCursor = cursors[Math.floor(Math.random() * cursors.length)];
    document.body.style.cursor = nextCursor;
    current++;

    const delay = Math.random() * ((options?.max ?? 200) - (options?.min ?? 100)) + (options?.min ?? 100);
    setTimeout(run, delay);
  };

  run();
}