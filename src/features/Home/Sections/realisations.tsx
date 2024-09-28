import React from 'react';
import bg from '../../../common/Images/hero.jpg';
import { motion } from "framer-motion"

export const Realisations = () => {
    return (
        <div className='grid gap-8 py-20'>
            <div className='px-12 grid gap-8'>
                <h2 className='text-7xl'>Moje Realizacje</h2>
                <p className='text-2xl opacity-75 max-w-[70%] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt laboriosam distinctio placeat error sit suscipit eum nobis officiis natus ad, maxime dolores provident a, vel cumque architecto fugiat voluptatibus!</p>
            </div>

            <div className='grid grid-cols-3 justify-center items-center max-w-screen-max m-auto'>
                <img src={bg} alt='Project' />
                <img src={bg} alt='Project' />
                <img src={bg} alt='Project' />
            </div>

            <motion.a
                initial={{ y: '30%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                href="/Kontakt"
                className="m-auto group relative overflow-hidden rounded-xl shadow-2xl bg-dark md:px-12 px-8 md:py-3 py-2 text-bright transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-dark hover:bright hover:ring-1  hover:ring-offset-2">
                <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-bright opacity-50  transition-all duration-700 group-hover:-translate-x-80"></span>
                <span className="relative md:text-xl ">Projekty</span>
            </motion.a>
        </div>
    );
};
