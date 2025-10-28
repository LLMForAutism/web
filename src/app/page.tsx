import Collaboration from "./components/collaboration";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OurJourney from "./components/our-jouney";
import VisiMisi from "./components/visi_misi";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VisiMisi />
      <Collaboration />
      <OurJourney />
      <Footer />
    </div>
  );
}
