import React from 'react';
import { Socials } from '../../common/arrays';
import { motion } from "framer-motion"

export const Contact = () => {
    return (
        <div className='min-h-screen max-w-3xl m-auto md:py-20 py-12'>
            <motion.div
                initial={{ y: '-30%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className='grid md:grid-cols-2 w-full gap-8 md:mb-32 mb-12 px-4'>
                <div className='grid md:gap-16 gap-4'>
                    <h1 className='text-dark md:text-4xl text-2xl text-center'>Skontaktuj się ze mną</h1>
                    <div className='flex gap-4 justify-center'>
                        {Socials.map((social) => (
                            <social.icon className='cursor-pointer text-buttons duration-300 hover:scale-75 md:text-[32px] text-3xl' />
                        ))}
                    </div>
                </div>

                <div className='grid md:justify-end justify-center md:text-xl text-lg'>
                    <a className='md:text-right text-center'>Adres Barbara <p>Olkusz 32-300</p></a>
                    <div className='grid'>
                        <a>barbara@gmail.com </a>
                        <a className='md:text-right text-center'>555 555 555 </a>
                    </div>
                </div>
            </motion.div >

            <motion.form
                initial={{ y: '30%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className='grid gap-8 m-auto px-4'>
                <div className='md:grid flex flex-col md:grid-cols-2 justify-around gap-8 w-full'>
                    <label>
                        <legend>Imię *</legend>
                        <input className='bg-bright border-b w-full  py-2 text-dark focus:outline-none' />
                    </label>
                    <label>
                        <legend>Nazwisko *</legend>
                        <input className='bg-bright border-b py-2 w-full text-dark focus:outline-none ' />
                    </label>
                </div>

                <label className='w-full'>
                    <legend>E-Mail *</legend>
                    <input className='bg-bright border-b py-2 w-full text-dark focus:outline-none' />
                </label>


                <label className='w-full'>
                    <legend>Wiadomość *</legend>
                    <textarea className='bg-bright border-b w-full  py-2 text-dark focus:outline-none' />
                </label>

                <button
                    // initial={{ y: '30%', opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: false }}
                    // transition={{ duration: 1, delay: 0.3 }}
                    className="m-auto group relative overflow-hidden rounded-xl bg-[#8b6d6a] md:px-12 px-8 md:py-3 py-2 text-bright transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-dark hover:bright hover:ring-1  hover:ring-offset-2">
                    <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-bright opacity-50  transition-all duration-700 group-hover:-translate-x-80"></span>
                    <span className="relative md:text-xl ">Wyślij</span>
                </button>
            </motion.form>
        </div >
    );
};
