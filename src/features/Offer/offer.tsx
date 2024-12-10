import React from "react";
import background from "../../common/Images/OfferImages/background.jpg";
import logo from "../../common/Images/BrightLogo.svg";
import { motion } from "framer-motion";
import { OfferList } from "../../common/arrays";

export const Offer = () => {
    return (
        <section className="overflow-hidden">
            <div
                className="hero min-h-screen shadow-5xl p-12"
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
                    className="flex items-center justify-center md:gap-8 gap-4 w-full"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="md:max-w-20 max-w-12 w-full"
                    />
                    <h1 className="lg:text-8xl md:text-5xl text-3xl text-bright text-center tracking-widest m-0">
                        Pakiety projektów
                    </h1>
                </motion.div>
            </div>

            <div className="max-w-screen-md mx-auto mb-24 px-4">
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
                                            className="flex-1 px-4"
                                        >
                                            <h3 className="text-3xl my-8 text-[#636363]">
                                                {project.name}
                                            </h3>
                                            <ul>
                                                {project.items.map(
                                                    (item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className="ml-4 list-disc"
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
