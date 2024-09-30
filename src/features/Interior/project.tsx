import React from 'react';
import { motion } from "framer-motion"
import bg from '../../common/Images/contact.jpg';
import logo from '../../common/Images/BrightLogo.svg';

export const Project = () => {
    return (
        <section>
            <div className='hero min-h-screen grid gap-8'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                <div className='grid gap-8'>
                    <motion.div
                        initial={{ y: '-30%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className='flex items-center justify-center md:gap-8 gap-4 w-full'>
                        <img src={logo} alt='Logo' className='md:max-w-20 max-w-12 w-full' />
                        <h1
                            className='lg:text-8xl md:text-5xl text-3xl text-bright text-center tracking-widest m-0 whitespace-nowrap'
                        >Projekt Kuchni
                        </h1>
                    </motion.div>

                    <div className='text-bright grid justify-center text-xl'>
                        <p>Lokalizacja: Kraków</p>
                        <p>Metraż: 30m2</p>
                        <p>Data realizacji: 2024</p>
                    </div>
                </div>

            </div >

            <div className='min-h-screen  text-center md:p-24 p-6  relative'>
                <motion.h2
                    initial={{ y: '-30%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className=' md:text-6xl text-3xl md:mb-8 mb-4 z-[2] font-medium'>Moje realizacje</motion.h2>
                <p className='md:mb-16 mb-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt similique cum natus quaerat placeat sint voluptas iste voluptatum quidem odio, beatae cumque nostrum error, fugiat quam, facilis omnis quod?</p>
                <div className='grid  gap-8'>

                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                    <img src={bg} alt="Project" className="max-w-screen-lg m-auto" />
                </div>
            </div>
        </section>

    );
};

