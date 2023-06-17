"use client";

import { useState } from "react";

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex flex-row bg-hint-of-red-50">
      <div className="flex flex-col items-center w-[680px]">
        <h1 className="mt-20 text-5xl ">Cadastro</h1>
        <form className="mt-20 mb-10 flex flex-col gap-4">
          <p className="text-xs">Email</p>
          <input className="h-12 rounded bg-botticelli-100" type="email" />
          <p className="text-xs">Senha</p>
          <input className="h-12 rounded bg-botticelli-100" />
          <p className="text-xs">Repita sua senha</p>
          <input className="h-12 rounded bg-botticelli-100" />
          <button className="h-12 rounded bg-san-marino-500 text-hint-of-red-50 font-regular text-2xl mt-10">
            CADASTRAR
          </button>
        </form>
        <div className="flex flex-row gap-2">
          <p>Já possui conta?</p>
          <a href="/login" className="underline">
            Faça Login!
          </a>
        </div>
      </div>
      <div className="h-screen bg-blue-zodiac-950 text-hint-of-red-50 w-screen"></div>
    </div>
  );
}
