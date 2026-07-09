import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TechnicalHighlights from "./components/TechnicalHighlights/TechnicalHighlights";

function App() {
    return (
        <>
            <Navbar />

            <Hero />
            <TechnicalHighlights />
            <About />

            <Skills />

            <Experience />

            <FeaturedProject />

            <Projects />

            <Education />

            <Contact />

            <Footer />
        </>
    );
}

export default App;