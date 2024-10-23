import React from 'react';
import { motion } from "framer-motion"
import Barbara from '../../../common/Images/Barbara.svg';

export const About = () => {
    return (
        <div className='grid md:gap-8 gap-4 md:pb-20 pb-12'>
            <motion.h2
                initial={{ y: '-50%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className='md:text-6xl text-3xl px-12  tracking-widest text-dark'>
                O mnie
            </motion.h2 >

            <div className='grid md:grid-cols-2 gap-4 max-w-[1100px] mx-auto mt-8 items-center px-2'>
                <motion.img
                    initial={{ x: '-10%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    src={Barbara}
                    alt='Barbara'
                    className='m-auto  max-w-96 w-full' />
                <div>
                    <div className='grid md:gap-8 gap-4 items-center justify-center'>
                        <motion.p
                            initial={{ x: '10%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className='md:text-4xl text-2xl text-center tracking-wide text-dark'>Barbara Szwala</motion.p>
                        <motion.p
                            initial={{ y: '10%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className='md:text-xl text-lg opacity-75 text-justify text-dark'>Cześć! Mam na imię Basia jestem architektem i projektantem wnętrz. Moja praca, a zarazem pasja do przestrzeni sprawia, że mogę tworzyć unikalne, harmonijne środowiska, które odzwierciedlają osobowości moich klientów. </motion.p>
                        <motion.p
                            initial={{ y: '10%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='md:text-xl text-lg opacity-75 text-justify text-dark'>Do każdego projektu podchodzę z sumiennością i poczuciem odpowiedzialności, ponieważ wiem, że przestrzeń, w której żyjemy wpływa na to jak się czujemy i jak funkcjonujemy.</motion.p>
                    </div>
                </div>

            </div>
        </div>
    );
};

