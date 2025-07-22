export async function simulateLoadingCursor(durationMs = 5000) {
  const body = document.body;
  const originalCursor = body.style.cursor;
  const variations = ['wait', 'default'];

  const changeCount = Math.floor(Math.random() * 5) + 7; // 7 à 11 changements

  // Générer des poids aléatoires
  const weights: number[] = [];
  let totalWeight = 0;
  for (let i = 0; i < changeCount; i++) {
    const w = Math.random();
    weights.push(w);
    totalWeight += w;
  }

  // Convertir en délais
  const delays = weights.map(w => Math.round((w / totalWeight) * durationMs));

  // Corriger l’écart d’arrondi (somme exacte = durationMs)
  const totalDelay = delays.reduce((sum, d) => sum + d, 0);
  const correction = durationMs - totalDelay;
  delays[0] += correction;

  console.log("Duration target:", durationMs, "ms. Final delay sum:", delays.reduce((a, b) => a + b), "ms");

  // Boucle avec délais
  for (let i = 0; i < changeCount; i++) {
    if (i % variations.length) {
      body.classList.remove("loading");
    } else {
      body.classList.add("loading");
    }

    console.log(`Switching cursor (step ${i + 1}/${changeCount}) for ${delays[i]} ms`);

    await new Promise(resolve => setTimeout(resolve, delays[i]));
  }

  // Réinitialise
  body.classList.remove("loading");
  body.style.cursor = originalCursor;
}
