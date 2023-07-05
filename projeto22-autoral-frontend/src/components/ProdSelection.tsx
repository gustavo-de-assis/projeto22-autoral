"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProdSelection({ title }: any) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);

  return (
    <div className=" flex flex-col w-full h-96 justify-center p-6">
      <h1 className="text-4xl font-medium">{title}</h1>
      <div className="flex flex-row w-full h-80 bg-botticelli-300 gap-2 rounded justify-evenly items-center">
        {products.map((p, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 h-5/6 w-36 items-center justify-start rounded"
          >
            <Link href={"/login"}>
              <Image
                src={"/assets/t-shirt.jpg"}
                width={130}
                height={150}
                alt="Tetelestyle"
              />
              <h1 className="mt-3 text-sm text-white align-middle">{p.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
