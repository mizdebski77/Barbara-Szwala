import logo from "../../../common/Images/HeaderLogo.svg";
import { motion } from "framer-motion";
import bgVideo from "../../../common/videos/bgVideo.mp4";

export const Hero = () => {
    return (
        <header className="relative flex z-[1] justify-start items-end h-screen mb-12 overflow-hidden">
            <div className="relative z-30 md:p-16 p-8 bottom-[25%] text-2xl grid md:gap-12 gap-8 text-white bg-purple-300  rounded-xl">
                <motion.div
                    initial={{ y: "-30%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-start md:gap-8 gap-4"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="md:max-w-md max-w-64 w-full md:m-0 m-auto"
                    />
                </motion.div>

                <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="tracking-widest md:text-5xl text-lg text-bright font-bold md:text-left text-center"
                >
                    Zadbajmy o Twoją przestrzeń
                </motion.p>

                <motion.a
                    initial={{ y: "30%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    href="/Kontakt"
                    className="max-w-8xl m-auto group relative overflow-hidden rounded-xl  bg-main md:px-12 px-8 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark"
                >
                    <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                    <span className="relative md:text-xl text-[16px]">
                        Napisz do mnie
                    </span>
                </motion.a>
            </div>

            <video
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
            />
        </header>
    );
};
