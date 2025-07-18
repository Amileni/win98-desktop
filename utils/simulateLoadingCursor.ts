export async function simulateLoadingCursor(durationMs = 5000) {
  const body = document.body;

  const originalCursor = body.style.cursor;
  const variations = ['wait', 'default'];

  const changeCount = Math.floor(Math.random() * 5) + 7; // 7 à 9 changements
  let elapsed = 0;

  for (let i = 0; i < changeCount && elapsed < durationMs; i++) {
    const delay = Math.floor(Math.random() * 400) + 100; // entre 100ms et 500ms
    elapsed += delay;

    // Alterne entre wait et default en modifiant la classe
    if (i % variations.length) {
      body.classList.remove("loading");
    } else {
      body.classList.add("loading");
    }

    console.log("switching cursor (step", i + 1, "/", changeCount, ")");

    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  // Réinitialise après la simulation
  body.classList.remove("loading");
  body.style.cursor = originalCursor;
}
