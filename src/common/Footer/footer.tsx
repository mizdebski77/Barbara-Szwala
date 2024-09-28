import React from 'react';
import logo from '../Images/BrightLogo.svg';
import { Link } from 'react-router-dom';
import { Links, Socials } from '../arrays';

const Footer = () => {
    return (
        <footer className='bg-custom-gradient w-full '>
            <div className=" lg:flex grid md:justify-evenly justify-center items-center md:p-12 py-8 px-4 md:gap-8 gap-20">
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
                            <Link to={link.navigation} key={index} className='text-bright md:text-lg text-md text-center duration-300 hover:-translate-y-1'>{link.name}</Link>
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
                    <Link to="/Kontakt" className="m-auto group relative overflow-hidden rounded-xl shadow-3xl bg-bright md:px-12 px-6 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark hover:ring-1  hover:ring-offset-2">
                        <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                        <span className="relative md:text-xl ">Formularz kontaktowy</span>
                    </Link>

                </div>
            </div>

            <div className='border-t-2 border-bright md:p-8 py-8 px-2 flex justify-center md:w-[90%] w-full md:m-auto m-0'>
                <span className='md:m-auto m-0 text-bright md:text-xl text-base'>Projekt oraz realizacja: <a href='https://marcinizdebski.pl/' className='font-bold duration-300 hover:opacity-75'>Marcin Izdebski</a></span>
            </div>

        </footer>

    );
};

export default Footer;