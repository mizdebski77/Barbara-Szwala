import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";

export const Links = [
    { name: 'Strona Główna', navigation: '/Strona-Główna' },
    { name: 'O mnie', navigation: '/O-Mnie' },
    { name: 'Architektura', navigation: '/Architektura' },
    { name: 'Projekty Wnętrz', navigation: '/Projekty-Wnętrz' },
    { name: 'Kontakt', navigation: '/Kontakt' },
];

export const Socials = [
    { icon: IoLogoInstagram, name: 'Instagram', link: 'https://www.instagram.com' },
    { icon: FaPhoneSquareAlt, name: 'Phone', link: 'tel:+1234567890' },
    { icon: IoMail, name: 'E-Mail', link: 'mailto:example@example.com' },
    { icon: FaSquareFacebook, name: 'Facebook', link: 'https://www.facebook.com' },
];