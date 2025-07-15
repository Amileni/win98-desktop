

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

// Hash du mot de passe que tu as généré :
const PASSWORD_HASH = "$2b$17$nE15zitBuxKZKXoBtDPBJe.xGWbBudMqQF0VYgMaZXUVvDCgpUYqK";

// En mémoire (à remplacer par une base si besoin)
let failedAttempts = 0;
const MAX_ATTEMPTS = 5;

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (failedAttempts >= MAX_ATTEMPTS) {
    return NextResponse.json({ success: false, locked: true }, { status: 403 });
  }

  const isValid = await bcrypt.compare(password, PASSWORD_HASH);

  if (isValid) {
    failedAttempts = 0;
    return NextResponse.json({ success: true });
  } else {
    failedAttempts++;
    return NextResponse.json({ success: false, attempts: failedAttempts });
  }
}
