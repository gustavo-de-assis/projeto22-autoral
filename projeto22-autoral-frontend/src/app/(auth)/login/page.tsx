"use client";

import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  function loginUser(event: React.ChangeEvent<HTMLFormElement>): void {
    const url = "http://localhost:4000/auth/login";
    event.preventDefault();
    const body = loginInfo;

    axios
      .post(url, body)
      .then((res) => {
        const response = res.data;
        const user = {
          email: response.user.email,
          token: response.token,
        };
        console.log(user);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  }

  return (
    <div className="flex flex-row bg-hint-of-red-50">
      <div className="h-screen bg-blue-zodiac-950 text-hint-of-red-50 w-screen"></div>
      <div className="flex flex-col items-center w-[680px]">
        <h1 className="mt-20 text-5xl ">Login</h1>
        <form className="mt-20 mb-10 flex flex-col gap-4" onSubmit={loginUser}>
          <p className="text-xs">Email</p>
          <input
            className="h-12 rounded bg-botticelli-100"
            type="email"
            value={loginInfo.email}
            onChange={(e) => {
              setLoginInfo({
                ...loginInfo,
                email: e.target.value,
              });
            }}
            required
          />
          <p className="text-xs">Senha</p>
          <input
            className="h-12 rounded bg-botticelli-100"
            type="password"
            value={loginInfo.password}
            onChange={(e) => {
              setLoginInfo({
                ...loginInfo,
                password: e.target.value,
              });
            }}
            required
          />
          <p className="text-xs text-right">Esqueceu a senha?</p>
          <button
            className="h-12 rounded bg-san-marino-500 text-hint-of-red-50 font-regular text-2xl"
            type="submit"
          >
            ENTRAR
          </button>
        </form>
        <div className="flex flex-row gap-2">
          <p>Não possui conta?</p>
          <a href="/signUp" className="underline">
            Cadastre-se!
          </a>
        </div>
      </div>
    </div>
  );
}
