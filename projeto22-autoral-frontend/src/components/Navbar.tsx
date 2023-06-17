"use client";

import { useEffect, useState } from "react";
import { getProviders, useSession } from "next-auth/react";
import { global } from "styled-jsx/css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  /*     const [providers, setProviders] = useState<any>(null);

    useEffect(()=>{
        const setProvider = async ()=>{
            const response = await getProviders();

            setProviders(response);
        }
        setProvider();
    }, []) */
  return (
    <>
      <nav className="flex-between w-full fixed top-0 z-10">
        <div className="flex flex-row justify-end w-full bg-san-marino-500 h-6 gap-2 font-rajdhani text-white px-4">
          <p> Logout </p>
          <p>|</p>
          <p> Bem-Vindo Fulano!</p>
        </div>

        <div className="flex flex-row w-full bg-blue-zodiac-950 h-16 px-4 items-center justify-between">
          <div className="my-auto">
            <Link href={"/"}>
              <Image
                src="/assets/logo.png"
                width={80}
                height={70}
                alt="Tetelestyle logo"
              />
            </Link>
          </div>

          <div className="flex flex-row p-1 font-rajdhani text-white text-2xl font-regular gap-8">
            <Link href={"/"}>
              <h1>Ofertas</h1>
            </Link>
            <p>|</p>
            <Link href={"/"}>
              <h1>Masculino</h1>
            </Link>
            <p>|</p>
            <Link href={"/"}>
              <h1>Feminino</h1>
            </Link>
            <p>|</p>
            <Link href={"/"}>
              <h1>Categorias</h1>
            </Link>
          </div>

          <div>
            <form className="flex flex-row gap-1">
              <input
                className="w-full px-2 rounded h-8"
                type="text"
                placeholder="Pesquisar"
                required
              />
              <button className="text-white">OK</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
