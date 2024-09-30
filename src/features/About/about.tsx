import React from 'react';
import barbara from '../../common/Images/Barbara.svg';
import logo from '../../common/Images/BrightLogo.svg';
import darkLogo from '../../common/Images/DarkLogo.svg';
import { motion } from "framer-motion"

export const About = () => {
    return (
        <section>
            <div className='hero min-h-screen'
                style={{
                    backgroundImage: `url(${barbara})`,
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
                    >O mnie
                    </h1>
                </motion.div>
            </div>


            <div className='min-h-screen  text-center md:p-24 p-6  relative'>
                <img src={darkLogo} alt='logo' className='absolute max-w-3xl opacity-5 w-full m-auto left-0 right-0 top-0 bottom-0 ' />

                <h2 className=' md:text-6xl text-3xl md:mb-16 mb-8 z-[2] font-medium'>Barbara Szwala</h2>

                <div className='md:flex grid md:gap-8 gap-4 max-w-screen-lg m-auto'>
                    <motion.img
                        initial={{ x: '-5%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        src={barbara} alt='Barbara' className='m-auto border-2 border-dirty z-[2]  md:max-w-lg max-w-72 w-full' />
                    <div className='grid md:gap-12 gap-6 z-[2]'>
                        <motion.div
                            initial={{ x: '5%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className='grid md:gap-4 gap-2'>
                            <p className='md:text-4xl text-2xl text-start'>Edukacja</p>
                            <p className='md:text-2xl text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor necessitatibus. Nam atque repellat tenetur enim nemo ex harum quam quisquam. </p>
                        </motion.div >

                        <motion.div
                            initial={{ x: '5%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='grid md:gap-4 gap-2'>
                            <p className='md:text-4xl text-2xl text-start'>Edukacja</p>
                            <p className='md:text-2xl text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor necessitatibus. Nam atque repellat tenetur enim nemo ex harum quam quisquam. </p>
                        </motion.div >

                        <motion.div
                            initial={{ x: '5%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className='grid md:gap-4 gap-2'>
                            <p className='md:text-4xl text-2xl text-start'>Edukacja</p>
                            <p className='md:text-2xl text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor necessitatibus. Nam atque repellat tenetur enim nemo ex harum quam quisquam. </p>
                        </motion.div >

                    </div>
                </div>
            </div>
        </section>

    );
};
