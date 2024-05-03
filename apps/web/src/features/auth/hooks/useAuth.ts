'use client';

import { webEnv } from '@/config/web-env';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { currentUserAtom, currentUserVersionAtom, isAuthenticatedAtom } from '../stores/auth-atom';

const fetchIsAuthenticated = async (): Promise<boolean> => {
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
      // console.log('data => ', data);
      return data === true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

const fetchLogin = async (username: string, password: string): Promise<any> => {
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
      return data;
    } else {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    return err;
  }
};

const fetchLogout = async (): Promise<any> => {
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
      return data;
    } else {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    return err;
  }
};

/**
 * 認証に関するHooks
 * @returns
 */
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const setCurrentUserVersion = useSetAtom(currentUserVersionAtom);
  const currentUser = useAtomValue(currentUserAtom);

  useEffect(() => {
    fetchIsAuthenticated().then((res) => {
      setIsAuthenticated(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refleshIsAuthenticated = () => {
    fetchIsAuthenticated().then((res) => {
      setIsAuthenticated(res);
    });
  };

  const login = async (username: string, password: string) => {
    const res = await fetchLogin(username, password);
    if (res.error) {
      return new Error(res.message);
    }
    setIsAuthenticated(true);
    await refleshCurrentUser();
    return res;
  };

  const logout = async () => {
    const res = await fetchLogout();
    if (res.error) {
      return new Error(res.message);
    }
    setIsAuthenticated(false);
    await refleshCurrentUser();
    return res;
  };

  const refleshCurrentUser = async () => {
    // console.log('currentUserVersion => ', currentUserVersion);
    setCurrentUserVersion((prev) => prev + 1);
  };

  return {
    isAuthenticated,
    refleshIsAuthenticated,
    login,
    logout,
    currentUser,
    refleshCurrentUser,
  };
};
