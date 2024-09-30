import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Nabar/navbar";
import Footer from "../common/Footer/footer";
import Home from "../features/Home/home";
import { Contact } from "../features/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Strona-Główna" element={<Home />} />
        <Route path="/Kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
