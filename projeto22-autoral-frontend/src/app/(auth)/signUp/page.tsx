"use client";

import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex flex-row bg-hint-of-red-50">
      <div className="flex flex-col fixed left-0 bg-hint-of-red-50 items-center w-3/12 h-full z-10">
        <h1 className="mt-20 text-7xl font-medium">Cadastro</h1>
        <form className="mt-20 mb-10 flex flex-col gap-4">
          <div className=" relative mb-3">
            <p className="text-sm z-1 bottom-10 absolute px-1">Email</p>
            <input
              className="h-12 rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
              type="email"
            />
          </div>
          <div className="relative mb-3">
            <p className="text-sm absolute z-1 bottom-10 px-1">Senha</p>
            <input className="h-12 rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200" />
          </div>
          <div className="relative">
            <p className="text-sm absolute z-1 bottom-10 px-1">
              Repita sua senha
            </p>
            <input className="h-12 rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200" />
          </div>
          <button className="h-12 rounded bg-san-marino-500 text-hint-of-red-50 font-semibold text-3xl hover:bg-san-marino-600 mt-10">
            CADASTRAR
          </button>
        </form>
        <div className="flex flex-row gap-2">
          <p>Já possui conta?</p>
          <a href="/login" className="hover:underline">
            Faça Login!
          </a>
        </div>
      </div>
      <div className="w-screen h-screen relative">
        <Image
          src={"/assets/banner.jpg"}
          alt="banner"
          width={1920}
          height={1080}
          className="absolute overflow-hidden inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-zodiac-950"></div>
      </div>
    </div>
  );
}
