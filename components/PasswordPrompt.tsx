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
      setError("Too many failed attempts. Please try again later.");
    } else {
      setError("Incorect password.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
        {error ? 
        (<p style={{ color: 'red' }}>{error}</p>) :
        (<p>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Password"
                style={{ marginRight: '8px', marginLeft: '8px', padding: '4px', border: '2px inset #fff'}}
            />
            <button onClick={handleSubmit}>Submit</button>
            </p>
        )}
    </div>
  );
}