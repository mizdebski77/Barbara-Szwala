import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Nabar/navbar";
import Footer from "../common/Footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("../features/Home/home"));
const Contact = lazy(() => import("../features/Contact/contact"));
const About = lazy(() => import("../features/About/about"));
const Offer = lazy(() => import("../features/Offer/offer"));
const Projects = lazy(() => import("../features/Projects/projects"));
const Project = lazy(() => import("../features/Projects/project"));

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Suspense fallback={<div>Ładowanie...</div>}>
                <Routes>
                    <Route path="/Strona-Główna" element={<Home />} />
                    <Route path="/Kontakt" element={<Contact />} />
                    <Route path="/O-Mnie" element={<About />} />
                    <Route path="/Projekty-Wnętrz" element={<Projects />} />
                    <Route path="/Architektura/:id" element={<Project />} />
                    <Route path="/Architektura" element={<Projects />} />
                    <Route
                        path={"*"}
                        element={<Navigate replace to="/Strona-Główna" />}
                    />
                    <Route path="/Projekty-Wnętrz/:id" element={<Project />} />
                    <Route path="/Oferta" element={<Offer />} />
                </Routes>
            </Suspense>
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
