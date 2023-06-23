import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProdSelection from "@/components/ProdSelection";

export default function Home() {
  return (
    <div className="flex flex-col mt-36">
      <Navbar />
      <Carousel />
      <ProdSelection title="Mais Vendidos" />
      <ProdSelection title="Veja também" />
      <Footer />
    </div>
  );
}
