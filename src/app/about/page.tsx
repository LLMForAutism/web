import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import AboutUs from "./components/about-us";
import OurRoadmap from "./components/our-journey";

export default function About() {
	return (
		<div>
			<Navbar />
			<AboutUs />
			<OurRoadmap />
			<Footer />
		</div>
	);
}
