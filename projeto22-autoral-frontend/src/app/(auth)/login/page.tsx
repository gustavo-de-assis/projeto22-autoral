"use client";

import axios from "axios";
import Image from "next/image";
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
      <div className="w-screen h-screen relative">
        <Image
          src={"/assets/banner.jpg"}
          alt="banner"
          fill
          className="absolute overflow-hidden inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-zodiac-950"></div>
      </div>

      <div className="flex flex-col fixed right-0 bg-hint-of-red-50 items-center w-[400px] h-full z-10">
        <h1 className="mt-20 text-7xl font-medium">Login</h1>
        <form className="mt-16 mb-10 flex flex-col gap-4" onSubmit={loginUser}>
          <div className=" relative mb-3">
            <p className="text-sm z-1 bottom-10 absolute px-1">Email</p>
            <input
              className="h-12 rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
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
          </div>

          <div className="relative">
            <p className="text-sm absolute z-1 bottom-10 px-1">Senha</p>
            <input
              className="h-12 rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
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
          </div>
          <p className="text-sm text-right font-medium">Esqueceu a senha?</p>
          <button
            className="h-12 rounded bg-san-marino-500 text-hint-of-red-50 font-semibold text-3xl hover:bg-san-marino-600"
            type="submit"
          >
            ENTRAR
          </button>
        </form>
        <div className="flex flex-row gap-2">
          <p>Não possui conta?</p>
          <a href="/signUp" className="hover:underline font-medium">
            Cadastre-se!
          </a>
        </div>
      </div>
    </div>
  );
}
