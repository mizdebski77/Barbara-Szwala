import React from 'react';
import hero from '../../../common/Images/hero.jpg';
import logo from '../../../common/Images/BrightLogo.svg';
import { motion } from "framer-motion"

export const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${hero})`,
            }}>
            <div className="hero-overlay bg-opacity-80"></div>

            <div className=" grid md:gap-8 gap-4 backdrop-blur-sm lg:py-32 py-12 w-full md:px-12 px-4">
                <motion.div
                    initial={{ y: '-30%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='flex items-center justify-center md:gap-8 gap-4'>
                    <img src={logo} alt='Logo' className='md:max-w-20 max-w-12 w-full' />
                    <h1

                        className='lg:text-8xl md:text-5xl text-3xl text-bright text-center tracking-widest m-0'
                    >Szwala Barbara
                    </h1>
                </motion.div>
                <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, }}
                    className='md:text-2xl text-lg text-bright opacity-80 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci delectus, quod,
                    rem dolorem soluta sunt sapiente nemo reprehenderit odit, rerum non fuga minus dolores voluptatibus at.
                    Provident, exercitationem optio.
                </motion.p>

                <motion.a
                    initial={{ y: '30%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    href="/Kontakt"
                    className="m-auto group relative overflow-hidden rounded-xl  bg-main md:px-12 px-8 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark">
                    <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                    <span className="relative md:text-xl ">Kontakt</span>
                </motion.a>


            </div>

        </div>
    );
};

