'use client';

import { useState } from 'react';

type PasswordPromptProps = {
  iconId: string;
  onSuccess: () => void;
};

export default function PasswordPrompt({ iconId, onSuccess }: PasswordPromptProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!password) return;

    const res = await fetch('/api/verify-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ iconId, password }),
    });

    const result = await res.json();

    if (result.success) {
      onSuccess();
    } else if (result.locked) {
      setError("Trop de tentatives. Cette application est bloquée.");
    } else {
      setError(`Mot de passe incorrect.`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Mot de passe"
        style={{ marginRight: '8px', padding: '4px' }}
      />
      <button onClick={handleSubmit}>Valider</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}