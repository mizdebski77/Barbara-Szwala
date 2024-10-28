import React from 'react';
import bg from '../../../common/Images/hero.jpg';
import { motion } from "framer-motion"

export const Realisations = () => {
    return (
        <div className='grid md:gap-8 gap-4 md:py-20 py-12'>
            <div className='md:px-12 px-4  grid md:gap-8 gap-4'>
                <motion.h2
                    initial={{ x: '-5%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className='md:text-6xl text-3xl text-dark'>Projekty</motion.h2 >
                <motion.p
                    initial={{ x: '-5%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='md:text-xl text-lg opacity-75 md:max-w-[70%] max-w-full text-justify text-dark '>
                    W naszych projektach dokładamy wszelkich starań, aby projekt spełniał wszelkie oczekiwania i indywidualne preferencje Klienta.
                    Łączymy funkcjonalność i estetykę – tak, by osiągnąć doskonałą harmonijną przestrzeń do codziennego życia.
                </motion.p >
            </div>

            <motion.div
                // initial={{ y: '-5%', opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // viewport={{ once: false }}
                // transition={{ duration: 1, delay: 0.3 }}
                className='grid md:grid-cols-2 gap-12 justify-center items-center max-w-[1500px] m-auto'>
                <a
                    href='/Kontakt'
                    className="relative p-48 flex justify-center items-center overflow-hidden group"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <span className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${bg})`
                        }}>
                    </span>

                    <span className="relative z-10 text-white text-3xl">Projekty wnętrz</span>
                    <span
                        className="px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-main text-dark font-bold py-2  rounded absolute z-10 bottom-12 right-12">
                        🡢
                    </span>
                </a>

                <a
                    href='/Kontakt'
                    className="relative p-48 flex justify-center items-center overflow-hidden group"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <span className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${bg})`
                        }}>
                    </span>

                    <span className="relative z-10 text-white text-3xl">Architektura</span>
                    <span
                        className="px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-main text-dark font-bold py-2  rounded absolute z-10 bottom-12 right-12">
                        🡢
                    </span>
                </a>



            </motion.div >
        </div >
    );
};
