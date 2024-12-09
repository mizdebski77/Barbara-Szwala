import {
    BrowserRouter,
    HashRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import { Navbar } from "../common/Nabar/navbar";
import Footer from "../common/Footer/footer";
import Home from "../features/Home/home";
import { Contact } from "../features/Contact/contact";
import { About } from "../features/About/about";
import { Interior } from "../features/Projects/interior";
import { Project } from "../features/Projects/project";
import { Offer } from "../features/Offer/offer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outside } from "../features/Projects/outside";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/Strona-Główna" element={<Home />} />
                <Route path="/Kontakt" element={<Contact />} />
                <Route path="/O-Mnie" element={<About />} />
                <Route path="/Projekty-Wnętrz" element={<Interior />} />
                <Route path="/Architektura/:id" element={<Project />} />
                <Route path="/Architektura" element={<Outside />} />
                <Route
                    path={"*"}
                    element={<Navigate replace to="/Strona-Główna" />}
                ></Route>
                <Route path="/Projekty-Wnętrz/:id" element={<Project />} />
                <Route path="/Oferta" element={<Offer />} />
            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
