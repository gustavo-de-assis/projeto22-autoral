"use client";

import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/Context/AuthContext";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const { signInUser } = useContext(AuthContext);
  const redirect = useRouter();

  async function loginUser(
    event: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    await signInUser(loginInfo);

    redirect.push("/");
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

      <div className="flex flex-col fixed right-0 bg-gradient-to-t from-transparent to-hint-of-red-50 md:bg-hint-of-red-50 items-center w-full md:w-1/2 lg:w-2/5 xl:w-[512px] h-full z-10 ">
        <h1 className="mt-20 text-7xl sm:text-8xl md:text-7xl font-medium">
          Login
        </h1>
        <form
          className="mt-16 mb-10 flex flex-col gap-4 sm:gap-5 w-2/4 md:w-2/3"
          onSubmit={loginUser}
        >
          <div className=" relative mb-3">
            <p className="text-md z-1 bottom-11 sm:-top-3 absolute px-1">
              Email
            </p>
            <input
              className="h-14 sm:h-16 w-full rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
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
            <p className="text-md absolute z-1 bottom-11 sm:-top-3 px-1">
              Senha
            </p>
            <input
              className="h-14 sm:h-16 w-full rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
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
          <p className="text-md sm:text-lg text-right font-medium">
            Esqueceu a senha?
          </p>
          <button
            className="h-12 sm:h-14 rounded bg-san-marino-500 text-hint-of-red-50 font-semibold text-3xl hover:bg-san-marino-600 sm:mt-8"
            type="submit"
          >
            ENTRAR
          </button>
        </form>
        <div className="flex flex-row gap-2 text-lg mt-10 sm:mt-6">
          <p>Não possui conta?</p>
          <a href="/signUp" className="hover:underline font-medium">
            Cadastre-se!
          </a>
        </div>
      </div>
    </div>
  );
}
