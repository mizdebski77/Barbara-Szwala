import React from 'react';
import logo from '../Images/BrightLogo.svg';
import { Links } from '../arrays';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='flex justify-between px-20 py-4 bg-dark'>
            <NavLink to="/Strona-Główna" className='flex gap-4 items-center'>
                <img src={logo} alt='Logo' />
                <span className='text-bright text-2xl'>Szwala Barbara</span>
            </NavLink>

            <div className='flex gap-12 items-center justify-center'>
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
        </nav>
    );
};

