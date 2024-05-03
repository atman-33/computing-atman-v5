'use client';

import { useAuth } from '@/features/auth';
import { useState } from 'react';

const Login = () => {
  const {
    isAuthenticated,
    refleshIsAuthenticated,
    login,
    logout,
    currentUser,
    refleshCurrentUser,
  } = useAuth();
  const [username, setEmail] = useState('test-user1');
  const [password, setPassword] = useState('test1234');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    const res = await login(username, password);
    if (res instanceof Error) {
      console.error(res);
      setError(res.message);
    } else {
      console.log(res);
      setError('');
    }
  };

  const handleLogout = async () => {
    const res = await logout();
    if (res instanceof Error) {
      setError(res.message);
    } else {
      setError('');
    }
  };

  const handleIsAuthenticated = async () => {
    refleshIsAuthenticated();
  };

  const handleRefleshCurrentUser = async () => {
    refleshCurrentUser();
  };

  return (
    <div className="mt-8 flex flex-col space-y-4">
      <h1>Login test</h1>
      <p>Authenticated: {isAuthenticated ? 'true' : 'false'}</p>
      <p>
        Current User: {currentUser?.id} {currentUser?.username}
      </p>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            className="mx-2 border-2 p-2"
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mx-2 border-2 p-2"
          />
        </label>
      </div>
      <div>
        <button className="bg-primary/40 w-40 rounded-sm p-2" onClick={handleLogin}>
          Login Button
        </button>
      </div>
      <div>
        <button className="bg-primary/40 w-40 rounded-sm p-2" onClick={handleLogout}>
          Logout Button
        </button>
      </div>
      <div>
        <button className="bg-primary/40 w-40 rounded-sm p-2" onClick={handleIsAuthenticated}>
          Is Authenticated?
        </button>
      </div>
      <div>
        <button className="bg-primary/40 w-40 rounded-sm p-2" onClick={handleRefleshCurrentUser}>
          Reflesh Current User
        </button>
      </div>
      <div className="text-red-600">{error}</div>
    </div>
  );
};

export default Login;
