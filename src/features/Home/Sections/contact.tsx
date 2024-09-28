import React from 'react';
import hero from '../../../common/Images/contact.jpg';
import { motion } from "framer-motion"

export const Contact = () => {
    return (
        <div className='grid md:gap-8 gap-4 md:pb-20 pb-12'>
            <div
                className="hero min-h-[400px]"
                style={{
                    backgroundImage: `url(${hero})`,
                }}>
                <div className="grid gap-8">
                    <motion.h3
                        className='text-7xl text-bright tracking-widest'
                    >
                        Skontaktuj się ze mną
                    </motion.h3>
                    <motion.p
                        className='text-2xl text-bright text-center opacity-90'
                    >
                        Skontaktuj się ze mną wypełniając formularz kontaktowy
                    </motion.p>

                    <motion.a
                        initial={{ y: '30%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        href="/Kontakt"
                        className="m-auto group relative overflow-hidden rounded-xl shadow-3xl bg-bright md:px-12 px-8 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark hover:ring-1  hover:ring-offset-2">
                        <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                        <span className="relative md:text-xl ">Formularz kontaktowy</span>
                    </motion.a>
                </div>

            </div>
        </div>
    );
};

