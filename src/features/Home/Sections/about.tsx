import React from 'react';
import { motion } from "framer-motion"
import Barbara from '../../../common/Images/Barbara.svg';

export const About = () => {
    return (
        <div className='grid md:gap-8 gap-4 md:pb-20 pb-12'>
            <motion.h2
                initial={{ x: '-5%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className='md:text-7xl text-3xl text-center tracking-widest'>
                Kilka słów o mnie
            </motion.h2 >

            <div className='grid grid-cols-2 gap-2 max-w-screen-lg mx-auto mt-8 items-center'>
                <img src={Barbara} alt='Barbara' className='m-auto shadow-2xl border-4' />
                <div>
                    <div className='grid gap-8 items-center justify-center'>
                        <p className='md:text-5xl text-2xl text-center tracking-wide'>Barbara Szwala</p>
                        <p className='text-2xl opacity-75 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero vitae, harum provident laudantium natus officia voluptatibus ad, voluptate nisi voluptas repellendus voluptates non amet architecto in cum consectetur deleniti.</p>
                        <p className='text-2xl opacity-75 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero vitae, harum provident laudantium natus officia voluptatibus ad, voluptate nisi voluptas repellendus voluptates non amet architecto in cum consectetur deleniti.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

