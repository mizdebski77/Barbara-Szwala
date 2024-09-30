import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Nabar/navbar";
import Footer from "../common/Footer/footer";
import Home from "../features/Home/home";
import { Contact } from "../features/Contact/contact";
import { About } from "../features/About/about";
import { Interior } from "../features/Interior/interior";
import { Outside } from "../features/Outside/outside";
import { Project } from "../features/Interior/project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Strona-Główna" element={<Home />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/O-Mnie" element={<About />} />
        <Route path="/Projekty-Wnętrz" element={<Interior />} />
        <Route path="/Architektura" element={<Outside />} />
        <Route path={"*"} element={<Navigate replace to="/Strona-Główna" />}></Route>
        <Route path="/Projekt/:id" element={<Project />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
