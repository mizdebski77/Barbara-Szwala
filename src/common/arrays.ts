import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import img from '../common/Images/ex.jpg';

export const Links = [
    { name: 'Strona Główna', navigation: '/Strona-Główna' },
    { name: 'O mnie', navigation: '/O-Mnie' },
    { name: 'Architektura', navigation: '/Architektura' },
    { name: 'Projekty Wnętrz', navigation: '/Projekty-Wnętrz' },
    { name: 'Oferta', navigation: '/Oferta' },
    { name: 'Kontakt', navigation: '/Kontakt' },
];

export const Socials = [
    { icon: IoLogoInstagram, name: 'Instagram', link: 'https://www.instagram.com' },
    { icon: FaPhoneSquareAlt, name: 'Phone', link: 'tel:+1234567890' },
    { icon: IoMail, name: 'E-Mail', link: 'mailto:example@example.com' },
    { icon: FaSquareFacebook, name: 'Facebook', link: 'https://www.facebook.com' },
];

export const OfferList = [
    {
        title: 'Pakiety projektów',
        projects: [
            {
                name: 'Projekt koncepcyjny',
                img: img,
                items: [
                    'WYWIAD Z KLIENTEM – OMÓWIENIE OCZEKIWAŃ I INSPIRACJI',
                    'INWENTARYZACJA PROJEKTOWANEJ PRZESTRZENI',
                    'PROJEKT UKŁADU FUNKCJONALNEGO OMAWIANYCH POMIESZCZEŃ (rzut 2D, widoki 3D)',
                    'DOKUMENTACJA TECHNICZNA USYTUOWANIE PUNKTÓW ELEKTRYCZNYCH I HYDRAULICZNYCH',
                    'PROJEKT FORMIE ELEKTONICZNEJ'
                ]
            },
            {
                name: 'Projekt kompleksowy',
                img: img,
                items: [
                    'WYWIAD Z KLIENTEM – OMÓWIENIE OCZEKIWAŃ I INSPIRACJI',
                    'INWENTARYZACJA PROJEKTOWANEJ PRZESTRZENI',
                    'PROJEKT UKŁADU FUNKCJONALNEGO OMAWIANYCH POMIESZCZEŃ (rzut 2D, widoki 3D)',
                    'DOKUMENTACJA TECHNICZNA USYTUOWANIE PUNKTÓW ELEKTRYCZNYCH I HYDRAULICZNYCH',
                    'SZCZEGÓŁOWA DOKUMENTACJA TECHNICZNA DLA WYKONAWCÓW',
                    'FOTOREALISTYCZNE WIZUALIZACJE PROJEKTOWANEJ PRZESTRZENI',
                    'KOSZTORYS MATERIAŁÓW I WYPOSAŻENIA Z LINKAMI DO KONKRETNYCH PRODUKTÓW',
                    'PROJEKT MEBLI NA WYMIAR',
                    'PROJEKT FORMIE ELEKTONICZNEJ',
                    'PROJEKT W FORMIE PAPIEROWEJ'
                ]
            },
            {
                name: 'Projekt premium',
                img: img,
                items: [
                    'WYWIAD Z KLIENTEM – OMÓWIENIE OCZEKIWAŃ I INSPIRACJI',
                    'INWENTARYZACJA PROJEKTOWANEJ PRZESTRZENI',
                    'PROJEKT UKŁADU FUNKCJONALNEGO OMAWIANYCH POMIESZCZEŃ (rzut 2D, widoki 3D)',
                    'DOKUMENTACJA TECHNICZNA USYTUOWANIE PUNKTÓW ELEKTRYCZNYCH I HYDRAULICZNYCH',
                    'SZCZEGÓŁOWA DOKUMENTACJA TECHNICZNA DLA WYKONAWCÓW',
                    'FOTOREALISTYCZNE WIZUALIZACJE PROJEKTOWANEJ PRZESTRZENI',
                    'KOSZTORYS MATERIAŁÓW I WYPOSAŻENIA Z LINKAMI DO KONKRETNYCH PRODUKTÓW',
                    'PROJEKT MEBLI NA WYMIAR',
                    'PROJEKT FORMIE ELEKTONICZNEJ',
                    'PROJEKT W FORMIE PAPIEROWEJ',
                    'KONTROLA PRAC WYKONYWANYCH NA BUDOWIE W KONTEKŚCIE ZGODNOŚCI Z PROJEKTEM',
                    'WPROWADZENIE ZAMIENNIKÓW PRODUKTÓW/ELEMENTÓW PROJEKTU W TRAKCIE REALIZACJI'
                ]
            }
        ]
    },
    {
        title: 'Dodatkowe informacje',
        info: [
            'Istnieje możliwość opracowania pojedynczego pomieszczenia',
            'Każdy temat projektowy wyceniamy indywidualnie',
            'Projektujemy kompleksowo i zachęcamy do obejmowania projektem jak największych przestrzeni, dzięki temu gwarantujemy spójność stylistyczną, kontrolę nad budżetem oraz przechowywaniem',
            'Projektujemy na terenie całej Polski i jeszcze dalej'
        ]
    }
];