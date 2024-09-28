import React, { useState } from 'react';
import logo from '../Images/BrightLogo.svg';
import { Links } from '../arrays';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion';
import { navbarAnimation } from '../animations';


export const Navbar = () => {
    const [mobileNavbar, setMobileNavbar] = useState(false);

    const toggleMobileNavbar = () => {
        setMobileNavbar(!mobileNavbar);
    };

    console.log(mobileNavbar);


    return (
        <>
            <nav className='flex justify-between md:px-12 px-4 py-4 bg-dark z-10 sticky top-0'>
                <NavLink to="/Strona-Główna" className='flex md:gap-4 gap-2 items-center'>
                    <img src={logo} alt='Logo' className='md:max-w-12 max-w-8 w-full' />
                    <span className='text-bright md:text-2xl text-lg'>Szwala Barbara</span>
                </NavLink>

                <div className='md:flex hidden lg:gap-12 gap-8 items-center justify-center'>
                    {Links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.navigation}
                            className='text-bright duration-300 hover:translate-y-[-4px]'
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                <div className='md:hidden block z-10' onClick={toggleMobileNavbar}>
                    <Hamburger color='#ffffff' size={28} />
                </div>
            </nav>


            <AnimatePresence>
                <motion.div
                    className='fixed w-full bg-#a70d0df grid gap-4 px-4 py-6 md:hidden z-[2] bg-dark'
                    initial="hidden"
                    animate={mobileNavbar ? "visible" : "hidden"}
                    exit="hidden"
                    variants={navbarAnimation}
                >

                    {Links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.navigation}
                            className='text-bright active:text-red text-center'
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

