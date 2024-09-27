import { BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "../common/Nabar/navbar";
import Footer from "../common/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
