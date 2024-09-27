import React from 'react';
import logo from '../Images/BrightLogo.svg';
import { Link } from 'react-router-dom';
import { Links, Socials } from '../arrays';

const Footer = () => {
    return (
        <footer className='bg-custom-gradient w-full '>
            <div className=" lg:flex grid md:justify-evenly justify-center items-center p-12 md:gap-8 gap-20">
                <Link to="/Strona-Główna" className='grid justify-center gap-4'>
                    <img src={logo} alt='Logo' className='m-auto md:max-w-20 max-w-16 w-full' />
                    <span className='text-bright md:text-3xl text-2xl'>
                        ©2024 Szwala Barbara
                    </span>
                </Link>

                <div className='grid  items-center md:gap-8 gap-4'>
                    <span className='md:text-3xl text-2xl text-bright m-auto'>Mapa Strony</span>
                    <div className='grid gap-4'>
                        {Links.map((link, index) => (
                            <Link to={link.navigation} key={index} className='text-bright md:text-lg text-lg text-center duration-300 hover:-translate-y-1'>{link.name}</Link>
                        ))}
                    </div>
                </div>

                {/* <div className='grid  items-center'>
                    <span className='md:text-3xl text-2xl text-bright m-auto'>Usłgui</span>
                </div> */}

                <div className='grid  items-center justify-center md:gap-8 gap-4'>
                    <span className='md:text-3xl text-2xl text-bright m-auto'>Kontakt</span>
                    <div className='flex md:gap-8 gap-4 justify-evenly'>
                        {Socials.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <social.icon className='text-bright duration-300 hover:scale-75 md:text-[40px] text-3xl' />
                            </a>
                        ))}
                    </div>
                    <Link to="/Kontakt" className="bg-bright rounded-md py-2 md:px-4 px-2 md:text-xl text-base shadow-3xl duration-300 hover:opacity-75 hover:scale-105">Formularz Kontaktowy

                    </Link>

                </div>
            </div>

            <div className='border-t-2 border-bright md:p-8 px-2 py-8 flex justify-center w-[90%] m-auto'>
                <span className='m-auto text-bright md:text-xl text-base'>Projekt oraz realizacja: <a href='https://marcinizdebski.pl/' className='font-bold duration-300 hover:opacity-75'>Marcin Izdebski</a></span>
            </div>

        </footer>

    );
};

export default Footer;