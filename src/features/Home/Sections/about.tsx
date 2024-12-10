import React from "react";
import { motion } from "framer-motion";
import Barbara from "../../../common/Images/AboutImages/barbara.jpg";
import { ArrowRight } from "lucide-react";

export const About = () => {
    return (
        <div className="grid md:gap-8 gap-4 md:pb-20 pb-12">
            <motion.h2
                initial={{ y: "-50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="md:text-6xl text-3xl px-12  tracking-widest text-dark"
            >
                O mnie
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-4 max-w-[1100px] mx-auto mt-8 items-center px-2">
                <motion.img
                    initial={{ x: "-10%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    src={Barbara}
                    alt="Barbara"
                    className="m-auto max-w-[240px] md:max-w-96 w-full"
                />
                <div>
                    <div className="grid md:gap-8 gap-4 items-center justify-center">
                        <motion.p
                            initial={{ x: "10%", opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className="md:text-4xl text-2xl text-center tracking-wide text-dark"
                        >
                            Barbara Szwala
                        </motion.p>
                        <motion.p
                            initial={{ y: "10%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className="md:text-xl text-lg opacity-75 text-justify text-dark"
                        >
                            Cześć! Mam na imię Basia&nbsp;jestem architektem
                            i&nbsp;projektantem wnętrz. Moja praca,
                            a&nbsp;zarazem pasja do przestrzeni sprawia, że mogę
                            tworzyć unikalne, harmonijne środowiska, które
                            odzwierciedlają osobowości moich klientów.
                        </motion.p>

                        <motion.p
                            initial={{ y: "10%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="md:text-xl text-lg opacity-75 text-justify text-dark"
                        >
                            Do każdego projektu podchodzę z&nbsp;sumiennością
                            i&nbsp;poczuciem odpowiedzialności, ponieważ wiem,
                            że&nbsp;przestrzeń, w&nbsp;której żyjemy wpływa
                            na&nbsp;to jak się czujemy i&nbsp;jak funkcjonujemy.
                        </motion.p>

                        <motion.a
                            initial={{ y: "30%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.3 }}
                            href="/O-Mnie"
                            className=" group relative overflow-hidden rounded-xl bg-[#8b6d6a] w-fit md:px-12 px-8 py-3 text-bright transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-dark hover:bright float-right ml-auto"
                        >
                            <span className="ease absolute -right-2 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-bright opacity-50 transition-all duration-700 group-hover:-translate-x-80"></span>
                            <span className="relative md:text-3xl">
                                <ArrowRight />
                            </span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};
