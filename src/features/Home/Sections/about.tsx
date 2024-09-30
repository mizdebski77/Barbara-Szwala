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
                className='md:text-7xl text-3xl text-center tracking-widest text-dark'>
                Kilka słów o mnie
            </motion.h2 >

            <div className='grid md:grid-cols-2 gap-4 max-w-screen-lg mx-auto mt-8 items-center px-2'>
                <motion.img
                    initial={{ x: '-10%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    src={Barbara}
                    alt='Barbara'
                    className='m-auto  border-4 border-dirty max-w-80 w-full' />
                <div>
                    <div className='grid md:gap-8 gap-4 items-center justify-center'>
                        <motion.p
                            initial={{ x: '10%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className='md:text-5xl text-2xl text-center tracking-wide text-dark'>Barbara Szwala</motion.p>
                        <motion.p
                            initial={{ y: '10%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className='md:text-2xl text-lg opacity-75 text-justify text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero vitae, harum provident laudantium natus officia voluptatibus ad, voluptate nisi voluptas repellendus voluptates non amet architecto in cum consectetur deleniti.</motion.p>
                        <motion.p
                            initial={{ y: '10%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='md:text-2xl text-lg opacity-75 text-justify text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero vitae, harum provident laudantium natus officia voluptatibus ad, voluptate nisi voluptas repellendus voluptates non amet architecto in cum consectetur deleniti.</motion.p>
                    </div>
                </div>

            </div>
        </div>
    );
};

