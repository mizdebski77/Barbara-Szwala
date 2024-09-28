import React from 'react';
import hero from '../../../common/Images/hero.jpg';
import logo from '../../../common/Images/BrightLogo.svg';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${hero})`,
            }}>
            <div className="hero-overlay bg-opacity-80"></div>

            <div className=" grid md:gap-8 gap-4 backdrop-blur-sm lg:py-32 py-12 w-full md:px-12 px-4">
                <div className='flex items-center justify-center md:gap-8 gap-4'>
                    <img src={logo} alt='Logo' className='md:max-w-20 max-w-12 w-full' />
                    <h1 className='lg:text-8xl md:text-5xl text-2xl text-bright text-center tracking-widest m-0'>Szwala Barbara</h1>
                </div>
                <p className='md:text-2xl text-lg text-bright opacity-80 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci delectus, quod,
                    rem dolorem soluta sunt sapiente nemo reprehenderit odit, rerum non fuga minus dolores voluptatibus at.
                    Provident, exercitationem optio.
                </p>

                <Link to="/Kontakt" className="m-auto group relative overflow-hidden rounded-xl shadow-3xl bg-bright md:px-12 px-8 md:py-3 py-2 text-dark transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-bright hover:dark hover:ring-1  hover:ring-offset-2">
                    <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-dark opacity-10  transition-all duration-700 group-hover:-translate-x-80"></span>
                    <span className="relative md:text-xl ">Kontakt</span>
                </Link>
            </div>

        </div>
    );
};

