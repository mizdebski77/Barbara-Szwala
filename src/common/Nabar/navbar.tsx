import React, { useState, useEffect } from 'react';
import logo from '../Images/DarkLogo.svg';
import { Links } from '../arrays';
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion';
import { navbarAnimation } from '../animations';

export const Navbar = () => {
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMobileNavbar = () => {
        setMobileNavbar(!mobileNavbar);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
                setMobileNavbar(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <>
            <nav className={`flex justify-between md:px-16 px-4 py-4 bg-main z-10 sticky top-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <NavLink to="/Strona-Główna" className='flex md:gap-4 gap-2 items-center'>
                    <img src={logo} alt='Logo' className='md:max-w-12 max-w-8 w-full' />
                </NavLink>

                <div className='md:flex hidden lg:gap-12 gap-8 items-center justify-center'>
                    {Links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.navigation}
                            className={({ isActive }) => `text-dark duration-300 hover:translate-y-[-4px] ${isActive ? 'text-bright' : 'text-bright'}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                <div className='md:hidden block z-10' onClick={toggleMobileNavbar}>
                    <Hamburger color='#ffffff' size={28} toggled={mobileNavbar} toggle={setMobileNavbar} />
                </div>
            </nav>

            <AnimatePresence>
                {mobileNavbar && (
                    <motion.div
                        className='fixed w-full bg-#a70d0df grid gap-4 px-4 py-6 md:hidden z-[2] bg-dark'
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={navbarAnimation}
                    >
                        {Links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.navigation}
                                className='text-bright active:text-red text-center'
                                onClick={() => setMobileNavbar(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
