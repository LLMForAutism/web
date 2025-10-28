import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import VisiMisi from "./components/visi_misi";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VisiMisi />
      <Footer />
    </div>
  );
}
