"use client";

import axios from "axios";
import { parseCookies, setCookie } from "nookies";
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
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "tts.token": token } = parseCookies();
    if (token) {
      getUserData(token);
    }
  }, []);

  async function getUserData(token: string) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/session`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = res.data;
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  }

  async function signInUser({ email, password }: SignInData) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
    const body = { email, password };

    try {
      const res = await axios.post(url, body);
      const userData = res.data.user;
      const token = res.data.token;

      setUser({ name: userData.name, email: userData.email });

      setCookie(undefined, "tts.token", token, {
        maxAge: 60 * 60 * 1, //1 hora
      });

      alert("Bem vindo!");
    } catch (err) {
      console.log(err.response.status);
      alert("Não foi possível fazer login!");
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signInUser }}>
      {children}
    </AuthContext.Provider>
  );
}
