import React from "react";
import background from "../../common/Images/OfferImages/background.jpg";
import logo from "../../common/Images/BrightLogo.svg";
import { motion } from "framer-motion";
import { OfferList } from "../../common/arrays";

export const Offer = () => {
    return (
        <section className="overflow-hidden">
            <div
                className="hero min-h-screen shadow-5xl md:p-12 p-4"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <motion.div
                    initial={{ y: "-30%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="md:flex grid items-center justify-center md:gap-8 gap-2 w-full"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="md:max-w-20 max-w-12 w-full md:m-0 m-auto"
                    />
                    <h1 className="lg:text-8xl md:text-5xl text-[28px] text-bright text-center tracking-widest m-0">
                        Pakiety projektów
                    </h1>
                </motion.div>
            </div>

            <div className="max-w-screen-md mx-auto mb-24 px-4 ">
                {OfferList.map((offer, index) => (
                    <div key={index}>
                        {offer.projects &&
                            offer.projects.map((project, idx) => (
                                <div key={idx}>
                                    <div
                                        className={`flex items-center ${
                                            idx % 2 === 0
                                                ? "md:flex-row flex-col"
                                                : "md:flex-row-reverse flex-col"
                                        } my-32 md:gap-12 gap-8`}
                                    >
                                        <motion.img
                                            initial={{
                                                x:
                                                    idx % 2 === 0
                                                        ? "-20%"
                                                        : "20%",
                                                opacity: 0,
                                            }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 1 }}
                                            src={project.img}
                                            alt={project.name}
                                            className="max-w-md w-full rounded-lg"
                                        />
                                        <motion.div
                                            initial={{
                                                x:
                                                    idx % 2 === 0
                                                        ? "20%"
                                                        : "-20%",
                                                opacity: 0,
                                            }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 1 }}
                                            className="flex-1 "
                                        >
                                            <h3 className="md:text-3xl text-2xl my-8 text-dark]">
                                                {project.name}
                                            </h3>
                                            <ul>
                                                {project.items.map(
                                                    (item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className="ml-4 list-disc text-dark opacity-80"
                                                        >
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    <div className="border-b  border-[#aaaaaa] my-8"></div>
                                </div>
                            ))}
                        {offer.info && (
                            <div className="mt-4">
                                <h4 className="text-xl my-4 font-semibold">
                                    Dodatkowe informacje
                                </h4>
                                <ul className="px-4">
                                    {offer.info.map((infoItem, infoIndex) => (
                                        <li
                                            key={infoIndex}
                                            className="ml-4 list-disc"
                                        >
                                            {infoItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
