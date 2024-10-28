import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Nabar/navbar";
import Footer from "../common/Footer/footer";
import Home from "../features/Home/home";
import { Contact } from "../features/Contact/contact";
import { About } from "../features/About/about";
import { Interior } from "../features/Interior/interior";
import { Project } from "../features/Interior/project";
import { Offer } from "../features/Offer/offer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Strona-Główna" element={<Home />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/O-Mnie" element={<About />} />
        <Route path="/Projekty-Wnętrz" element={<Interior />} />
        <Route path="/Architektura" element={<Interior />} />
        <Route path={"*"} element={<Navigate replace to="/Strona-Główna" />}></Route>
        <Route path="/Projekty-Wnętrz/:id" element={<Project />} />
        <Route path="/Oferta" element={<Offer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
