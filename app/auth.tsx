// app/auth.tsx
import { ReactNode, useState } from 'react';

interface AuthProps {
  children: ReactNode;
}

export default function Auth({ children }: AuthProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'your_password') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
