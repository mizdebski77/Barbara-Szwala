import React from 'react';
import barbara from '../../common/Images/hero.jpg';
import logo from '../../common/Images/BrightLogo.svg';
import { motion } from "framer-motion";
import { OfferList } from '../../common/arrays';

export const Offer = () => {
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
                    <h1 className='lg:text-8xl md:text-5xl text-3xl text-bright text-center tracking-widest m-0'>
                        Pakiety projektów
                    </h1>
                </motion.div>
            </div>

            <div className="max-w-screen-md mx-auto mb-24">
                {OfferList.map((offer, index) => (
                    <div key={index}>
                        {offer.projects && offer.projects.map((project, idx) => (
                            <div key={idx}>
                                <div className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} my-32 gap-12`}>
                                    <img src={project.img} alt={project.name} className="max-w-md rounded-lg" />
                                    <div className="flex-1 px-4">
                                        <h3 className="text-3xl my-8 text-[#636363]">{project.name}</h3>
                                        <ul>
                                            {project.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="ml-4 list-disc">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-b  border-[#aaaaaa] my-8"></div>
                            </div>
                        ))}
                        {offer.info && (
                            <div className="mt-4">
                                <h4 className="text-xl my-4 font-semibold">Dodatkowe informacje</h4>
                                <ul className='px-4'>
                                    {offer.info.map((infoItem, infoIndex) => (
                                        <li key={infoIndex} className="ml-4 list-disc">{infoItem}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
