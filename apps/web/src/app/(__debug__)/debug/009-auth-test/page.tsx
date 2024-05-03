'use client';

import { webEnv } from '@/config/web-env';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  // const router = useRouter();
  const [username, setEmail] = useState('test-user1');
  const [password, setPassword] = useState('test1234');

  const handleLogin = async () => {
    try {
      const res = await fetch(webEnv.NEXT_PUBLIC_API_ENDPOINT + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        // router.push('/');
      } else {
        // Handle login error
        const data = await res.json();
        console.log(data);
        console.error('Login response failed');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch(webEnv.NEXT_PUBLIC_API_ENDPOINT + '/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        // router.push('/');
      } else {
        // Handle login error
        const data = await res.json();
        console.log(data);
        console.error('Logout response failed');
      }
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const handleIsAuthenticated = async () => {
    try {
      const res = await fetch(webEnv.NEXT_PUBLIC_API_ENDPOINT + '/auth', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        const data = await res.json();
        console.log(data);
        console.error('is authenticated response failed');
      }
    } catch (error) {
      console.error('is authenticated failed', error);
    }
  };

  return (
    <div className="mt-8">
      <h1>Login test</h1>
      <div className="mt-4">
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
      <div className="mt-4">
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
      <div className="mt-4">
        <button className="bg-primary/40 w-40 rounded-sm p-2" onClick={handleLogin}>
          Login Button
        </button>
      </div>
      <div className="mt-4">
        <button className="bg-primary/40 w-40 rounded-sm p-2" onClick={handleLogout}>
          Logout Button
        </button>
      </div>
      <div className="mt-4">
        <button className="bg-primary/40 w-40 rounded-sm p-2" onClick={handleIsAuthenticated}>
          Is Authenticated?
        </button>
      </div>
    </div>
  );
};

export default Login;
