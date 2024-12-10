import React from "react";
import { motion } from "framer-motion";
import outsidebg from "../../common/Images/HomeImages/outside.png";
import logo from "../../common/Images/BrightLogo.svg";
import { useLocation } from "react-router-dom";
import interiorbg from "../../common/Images/HomeImages/interior.png";
import { ProjectsLinks } from "../../common/arrays";

export const Projects = () => {
    const path = useLocation();
    const pathname = path.pathname.includes("Architektura");
    return (
        <section>
            <div
                className="hero min-h-screen shadow-5xl"
                style={{
                    backgroundImage: `url(${
                        pathname ? outsidebg : interiorbg
                    })`,
                }}
            >
                <motion.div
                    initial={{ y: "-30%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center md:gap-8 gap-4 w-full"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="md:max-w-20 max-w-12 w-full"
                    />
                    <h1 className="lg:text-8xl md:text-5xl text-3xl text-bright text-center tracking-widest m-0">
                        {pathname ? "Architektura" : "Projekty Wnętrz"}
                    </h1>
                </motion.div>
            </div>
            <div className="min-h-screen  text-center md:p-24 p-6 relative">
                <h2 className="md:text-6xl text-3xl md:mb-16 mb-8 z-[2] font-medium">
                    Moje realizacje
                </h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(min(480px, 100%), 1fr))",
                    }}
                    className="flex max-w-[1920px] m-auto  flex-wrap  gap-20"
                >
                    {pathname
                        ? ProjectsLinks.architecture.map((project) => (
                              <a
                                  href={`Architektura/projekt/${project.id}`}
                                  key={project.id}
                                  className="max-w-[510px] w-full h-[400px] m-auto"
                              >
                                  <div className="relative group cursor-pointer">
                                      <span className="absolute bottom-0 p-4 left-0 right-0 z-[3] text-bright text-2xl flex items-center justify-center bg-buttons">
                                          {project.name}
                                      </span>
                                      <span className="text-bright bg-opacityDark text-3xl opacity-0 transition-opacity duration-500 absolute inset-0 flex items-center justify-center group-hover:opacity-100">
                                          Sprawdź
                                      </span>
                                      <img
                                          src={project.imgSrc}
                                          alt="Project"
                                          className="w-full object-cover rounded-md transition-shadow duration-300 group-hover:shadow-2xl"
                                      />
                                  </div>
                              </a>
                          ))
                        : ProjectsLinks.interiors.map((project) => (
                              <a
                                  href={`Architektura/projekt/${project.id}`}
                                  key={project.id}
                                  className="max-w-[510px] w-full h-[400px] m-auto"
                              >
                                  <div className="relative group cursor-pointer">
                                      <span className="absolute bottom-0 p-4 left-0 right-0 z-[3] text-bright text-2xl flex items-center justify-center bg-buttons">
                                          {project.name}
                                      </span>
                                      <span className="text-bright bg-opacityDark text-3xl opacity-0 transition-opacity duration-500 absolute inset-0 flex items-center justify-center group-hover:opacity-100">
                                          Sprawdź
                                      </span>
                                      <img
                                          src={project.imgSrc}
                                          alt="Project"
                                          className="h-[400px] object-cover rounded-md transition-shadow duration-300 group-hover:shadow-2xl"
                                      />
                                  </div>
                              </a>
                          ))}
                </div>
            </div>
        </section>
    );
};
