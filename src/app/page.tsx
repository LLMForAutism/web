import Collaboration from "./components/collaboration";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OurJourney from "./components/our-jouney";
import ProjectShowcase from "./components/project-showcase";
import VisiMisi from "./components/visi_misi";

export default function Home() {
  return (
    <div className="bg-whitesmoke">
      <Navbar />
      <Hero />
      <VisiMisi />
      <Collaboration />
      <OurJourney />
      <ProjectShowcase />
      <Footer />
    </div>
  );
}
