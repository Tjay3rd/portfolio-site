import Navbar from "./src/Navbar";
import Hero from "./src/Hero";
import About from "./src/About";
import Services from "./src/Services";
import Work from "./src/Work";
import Contact from "./src/Contact";
import Footer from "./src/Footer";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Services />
				<Work />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
