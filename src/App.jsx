import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Stats from "./components/Stats/Stats";

function App() {

    useEffect(() => {

        if (window.location.hash) {

            const element = document.querySelector(window.location.hash);

            if (element) {

                setTimeout(() => {

                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 200);

            }

        }

    }, []);

    return (
        <>
            <Navbar />

            <Hero />

            <Stats />

            <About />

            <TechStack />

            <Experience />

            <FeaturedProject />

            {/* <Projects /> */}

            <Education />

            <Contact />

            <Footer />
        </>
    );
}

export default App;