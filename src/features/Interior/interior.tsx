import React from 'react';
import { motion } from "framer-motion"
import bg from '../../common/Images/contact.jpg';
import logo from '../../common/Images/BrightLogo.svg';

export const Interior = () => {
    return (
        <section>
            <div className='hero min-h-screen'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                <motion.div
                    initial={{ y: '-30%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className='flex items-center justify-center md:gap-8 gap-4 w-full'>
                    <img src={logo} alt='Logo' className='md:max-w-20 max-w-12 w-full' />
                    <h1
                        className='lg:text-8xl md:text-5xl text-3xl text-bright text-center tracking-widest m-0'
                    >Projkety Wnętrz
                    </h1>
                </motion.div>
            </div>
            <div className='min-h-screen  text-center md:p-24 p-6  relative'>
                <h2 className=' md:text-6xl text-3xl md:mb-16 mb-8 z-[2] font-medium'>Moje realizacje</h2>
                <div className='grid grid-cols-3 gap-8'>

                    <div className="relative group cursor-pointer">
                        <span className="absolute bottom-4 left-0 right-0 z-[3] text-bright text-2xl flex items-center justify-center">
                            Nazwa projektu
                        </span>
                        <span className="text-bright text-3xl opacity-0 transition-opacity duration-500 absolute inset-0 flex items-center justify-center group-hover:opacity-100">
                            Sprawdź
                        </span>
                        <img src={bg} alt="Project" className="w-full object-cover rounded-md transition-shadow duration-300 group-hover:shadow-2xl" />
                    </div>

                    <div className="relative group cursor-pointer">
                        <span className="absolute bottom-4 left-0 right-0 z-[3] text-bright text-2xl flex items-center justify-center">
                            Nazwa projektu
                        </span>
                        <span className="text-bright text-3xl opacity-0 transition-opacity duration-500 absolute inset-0 flex items-center justify-center group-hover:opacity-100">
                            Sprawdź
                        </span>
                        <img src={bg} alt="Project" className="w-full object-cover rounded-md transition-shadow duration-300 group-hover:shadow-2xl" />
                    </div>

                    <div className="relative group cursor-pointer">
                        <span className="absolute bottom-4 left-0 right-0 z-[3] text-bright text-2xl flex items-center justify-center">
                            Nazwa projektu
                        </span>
                        <span className="text-bright text-3xl opacity-0 transition-opacity duration-500 absolute inset-0 flex items-center justify-center group-hover:opacity-100">
                            Sprawdź
                        </span>
                        <img src={bg} alt="Project" className="w-full object-cover rounded-md transition-shadow duration-300 group-hover:shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>

    );
};

