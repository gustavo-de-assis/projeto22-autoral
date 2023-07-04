"use client";

import axios from "axios";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signInUser: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { "tts.token": token } = parseCookies();
    if (token) {
      getUserData(token);
    }
  }, [isAuthenticated]);

  async function getUserData(token: string) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/session`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser({ name: res.data.name, email: res.data.email });
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    }
  }

  async function logout() {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`;
    const { "tts.token": token } = parseCookies();

    try {
      await axios.post(url, { token });
      destroyCookie(undefined, "tts.token", { path: "/" });
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.log(error.response);
    }
  }

  async function signInUser({ email, password }: SignInData) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
    const body = { email, password };

    try {
      const res = await axios.post(url, body);
      const token = res.data.token;

      setCookie(undefined, "tts.token", token, {
        maxAge: 60 * 60 * 1, //1 hora
      });

      setUser({ name: res.data.result.name, email: res.data.result.email });

      alert("Bem vindo!");
    } catch (err) {
      alert("Não foi possível fazer login!");
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signInUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
