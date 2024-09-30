import React from 'react';
import { motion } from "framer-motion"
import bg from '../../../common/Images/contact.jpg';

export const Services = () => {
    return (
        <div className='grid md:gap-8 gap-4 md:pb-20 pb-12'>
            <div className='md:px-12 px-4  grid md:gap-8 gap-4'>
                <motion.h2
                    initial={{ x: '-5%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className='md:text-7xl text-3xl text-dark'>Moje Usługi</motion.h2 >
                <motion.p
                    initial={{ x: '-5%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='md:text-2xl text-lg opacity-75 md:max-w-[70%] max-w-full text-justify text-dark'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt laboriosam distinctio placeat error sit suscipit eum nobis officiis natus ad, maxime dolores provident a, vel cumque architecto fugiat voluptatibus!
                </motion.p >
            </div>

            <div className='grid md:grid-cols-3 md:max-w-[100%] max-w-md gap-8 p-4 m-auto'>

                <motion.div
                    className='lg:p-12 p-8 grid gap-4 shadow-2xl'
                    initial={{ y: '20%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <p className='md:text-3xl text-2xl text-center text-bright'>Usługa</p>
                    <p className='md:text-xl text-md text-bright opacity-90 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus voluptatum sint esse nulla, quis deleniti perferendis excepturi asperiores repellat quos deserunt consequatur! Omnis possimus fuga sunt, fugit repellat recusandae!</p>

                    <a
                        href="/Kontakt"
                        className="m-auto group relative overflow-hidden rounded-xl shadow-3xl bg-bright md:px-12 px-8 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark hover:ring-1  hover:ring-offset-2">
                        <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                        <span className="relative md:text-xl ">Czytaj więcej</span>
                    </a>
                </motion.div>

                <motion.div
                    className='lg:p-12 p-8 grid gap-4 shadow-2xl'
                    initial={{ y: '20%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <p className='md:text-3xl text-2xl text-center text-bright'>Usługa</p>
                    <p className='md:text-xl text-md text-bright opacity-90 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus voluptatum sint esse nulla, quis deleniti perferendis excepturi asperiores repellat quos deserunt consequatur! Omnis possimus fuga sunt, fugit repellat recusandae!</p>

                    <a
                        href="/Kontakt"
                        className="m-auto group relative overflow-hidden rounded-xl shadow-3xl bg-bright md:px-12 px-8 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark hover:ring-1  hover:ring-offset-2">
                        <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                        <span className="relative md:text-xl ">Czytaj więcej</span>
                    </a>
                </motion.div>

                <motion.div
                    className='lg:p-12 p-8 grid gap-4 shadow-2xl'
                    initial={{ y: '20%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <p className='md:text-3xl text-2xl text-center text-bright'>Usługa</p>
                    <p className='md:text-xl text-md text-bright opacity-90 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus voluptatum sint esse nulla, quis deleniti perferendis excepturi asperiores repellat quos deserunt consequatur! Omnis possimus fuga sunt, fugit repellat recusandae!</p>

                    <a
                        href="/Kontakt"
                        className="m-auto group relative overflow-hidden rounded-xl shadow-3xl bg-bright md:px-12 px-8 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark hover:ring-1  hover:ring-offset-2">
                        <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                        <span className="relative md:text-xl ">Czytaj więcej</span>
                    </a>
                </motion.div>

            </div>
        </div>
    );
};

