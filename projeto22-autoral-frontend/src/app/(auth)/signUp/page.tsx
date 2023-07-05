"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [singConfirm, setSignConfirm] = useState(false);
  const router = useRouter();
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function signUpUser(event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    const { confirmPassword, ...body } = signUpInfo;
    if (body.password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const url = "http://localhost:4000/auth/signup";

    axios
      .post(url, body)
      .then((res) => {
        console.log(res.status);
        alert("Cadastro realizado com sucesso!");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err && err.response.status === 409) {
          alert("Este email já está sendo utilizado!");
        } else {
          alert("Não foi possível realizar o cadastro!");
        }
      });
  }

  return (
    <div className="flex flex-row bg-hint-of-red-50">
      <div className="flex flex-col fixed left-0 bg-gradient-to-t from-transparent to-hint-of-red-50 md:bg-hint-of-red-50 items-center w-full md:w-1/2 lg:w-2/5 xl:w-[512px] h-full z-10 ">
        <h1 className="mt-20 text-7xl font-medium">Cadastro</h1>

        <form
          onSubmit={signUpUser}
          className="mt-16 mb-10 flex flex-col gap-4 sm:gap-5 w-2/4 md:w-2/3"
        >
          <div className=" relative mb-3">
            <p className="text-md z-1 bottom-11 sm:-top-3 absolute px-1">
              Seu nome completo
            </p>
            <input
              className="h-14 sm:h-16 w-full rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
              type="text"
              value={signUpInfo.name}
              onChange={(e) => {
                setSignUpInfo({
                  ...signUpInfo,
                  name: e.target.value,
                });
              }}
              required
            />
          </div>

          <div className=" relative mb-3">
            <p className="text-md z-1 bottom-11 sm:-top-3 absolute px-1">
              Email
            </p>
            <input
              className="h-14 sm:h-16 w-full rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
              type="email"
              value={signUpInfo.email}
              onChange={(e) => {
                setSignUpInfo({
                  ...signUpInfo,
                  email: e.target.value,
                });
              }}
              required
            />
          </div>

          <div className="relative mb-3">
            <p className="text-md z-1 bottom-11 sm:-top-3 absolute px-1">
              Senha
            </p>
            <input
              className="h-14 sm:h-16 w-full rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
              type="password"
              value={signUpInfo.password}
              onChange={(e) => {
                setSignUpInfo({
                  ...signUpInfo,
                  password: e.target.value,
                });
              }}
              required
            />
          </div>

          <div className="relative">
            <p className="text-md z-1 bottom-11 sm:-top-3 absolute px-1">
              Repita sua senha
            </p>
            <input
              className="h-14 sm:h-16 w-full rounded bg-botticelli-100 px-3 outline-none focus:bg-san-marino-200"
              type="password"
              value={signUpInfo.confirmPassword}
              onChange={(e) => {
                setSignUpInfo({
                  ...signUpInfo,
                  confirmPassword: e.target.value,
                });
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="h-12 sm:h-14 rounded bg-san-marino-500 text-hint-of-red-50 font-semibold text-3xl hover:bg-san-marino-600 mt-8"
          >
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
          fill
          className="absolute overflow-hidden inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-zodiac-950"></div>
      </div>
    </div>
  );
}
