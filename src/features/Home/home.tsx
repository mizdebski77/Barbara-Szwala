import { useEffect, useState } from "react";
import { About } from "./Sections/about";
import { Contact } from "./Sections/contact";
import { Hero } from "./Sections/hero";
import { Realisations } from "./Sections/realisations";
import { Services } from "./Sections/services";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Symulacja ładowania
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="overflow-hidden">
            <Hero />
            <Realisations />
            <Contact />
            <About />
            <Services />
        </div>
    );
};

export default Home;
