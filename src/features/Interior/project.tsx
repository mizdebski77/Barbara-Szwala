import React from 'react';
import { motion } from "framer-motion"
import bg from '../../common/Images/contact.jpg';
import logo from '../../common/Images/BrightLogo.svg';

declare const require: {
    context(path: string, recursive: boolean, regExp: RegExp): {
        keys(): string[];
        <T>(id: string): T;
    };
};

export const Project = () => {

    const largeImagesFolder = require.context('../../common/Images/Projects', true, /\.png$/);
    const largeImageKeys = largeImagesFolder.keys();

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
                        >Projekt mieszkania
                        </h1>
                    </motion.div>

                    <div className='text-bright grid justify-center text-xl'>
                        <p>Lokalizacja: Olkusz</p>
                        <p>Metraż: 30m2</p>
                        <p>Data realizacji: 2024</p>
                    </div>
                </div>

            </div >

            <div className='min-h-screen  text-center md:p-24 p-6  relative'>
                <div className='grid  gap-8'>
                    {largeImageKeys.map((imageKey, index) => (
                        <img
                            src={largeImagesFolder(imageKey) as string}

                            key={index} alt="Project" className="max-w-screen-lg m-auto" />
                    ))}
                </div>
            </div>
        </section>

    );
};

