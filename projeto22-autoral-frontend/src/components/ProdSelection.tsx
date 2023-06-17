"use client";

export default function ProdSelection({ title }: any) {
  return (
    <div className=" flex flex-col w-full h-80 justify-center p-6">
      <h1 className="text-3xl">{title}</h1>
      <div className="flex w-full h-72 bg-botticelli-300 justify-center items-center rounded"></div>
    </div>
  );
}
