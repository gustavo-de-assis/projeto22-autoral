import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProdSelection from "@/components/ProdSelection";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="flex flex-col mt-36">
      <Navbar />
      <Carousel />
      <ProdSelection />
      <ProdSelection />
      <Footer />
    </div>
  );
}
