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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt laboriosam distinctio placeat error sit suscipit eum nobis officiis natus ad, maxime dolores provident a, vel cumque architecto fugiat voluptatibus!
                </motion.p >
            </div>

            <motion.div
                // initial={{ y: '-5%', opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // viewport={{ once: false }}
                // transition={{ duration: 1, delay: 0.3 }}
                className='grid md:grid-cols-3 justify-center items-center max-w-screen-max m-auto'>
                <img src={bg} alt='Project' />
                <img src={bg} alt='Project' />
                <img src={bg} alt='Project' />
            </motion.div >

            <motion.a
                initial={{ y: '30%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.3 }}
                href="/Kontakt"
                className="m-auto group relative overflow-hidden rounded-xl bg-[#8b6d6a] md:px-12 px-8 md:py-3 py-2 text-bright transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-dark hover:bright">
                <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-bright opacity-50  transition-all duration-700 group-hover:-translate-x-80"></span>
                <span className="relative md:text-xl ">Projekty</span>
            </motion.a>
        </div>
    );
};
