import { Contact } from './Sections/contact';
import { Hero } from './Sections/hero';
import { Realisations } from './Sections/realisations';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Hero />
            <Realisations />
            <Contact />
        </div>
    );
};

export default Home;