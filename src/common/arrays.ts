import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import img1 from '../common/Images/OfferImages/1Image.jpg';
import img2 from '../common/Images/OfferImages/2Image.png';
import img3 from '../common/Images/OfferImages/3Image.jpg';
import th1 from '../common/Images/Thumbnails/house.png';
import bathroom from '../common/Images/Thumbnails/bathroom.png';
import house from '../common/Images/Thumbnails/home.png';
import roof from '../common/Images/Thumbnails/roof.png';
import mom from '../common/Images/Thumbnails/mom.jpg';
import piter from '../common/Images/Thumbnails/piter.png'

export const Links = [
    { name: 'Strona Główna', navigation: '/Strona-Główna' },
    { name: 'O mnie', navigation: '/O-Mnie' },
    { name: 'Architektura', navigation: '/Architektura' },
    { name: 'Projekty Wnętrz', navigation: '/Projekty-Wnętrz' },
    { name: 'Oferta', navigation: '/Oferta' },
    { name: 'Kontakt', navigation: '/Kontakt' },
];

export const Socials = [
    { icon: IoLogoInstagram, name: 'Instagram', link: 'https://www.instagram.com/sb_pracownia_arch/' },
    { icon: FaPhoneSquareAlt, name: 'Phone', link: 'tel:+48605629897' },
    { icon: IoMail, name: 'E-Mail', link: 'mailto:kontakt@sbpracownia.pl' },
];

export const OfferList = [
    {
        title: 'Pakiety projektów',
        projects: [
            {
                name: 'Projekt koncepcyjny',
                img: img1,
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
                img: img2,
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
                img: img3,
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

export const ProjectsLinks = {
    interiors: [
        {
            id: '1as12',
            name: "Projekt w domu jednorodzinnym",
            imgSrc: mom,
            location: "Przeginia",
            surface: '123',
            date: '2023',
        },

        {
            id: '1h5sgb1',
            name: "Projekt poddasza użytkowego w domu jednorodzinnym",
            imgSrc: roof,
            location: "Przeginia",
            surface: '49',
            date: '2023',
        },

        {
            id: 'j1yus82',
            name: "Projekt mieszkania",
            imgSrc: piter,
            location: "Olkusz",
            surface: '52',
            date: '2024',
        },

        {
            id: 'wsa1ju12',
            name: "Projekt łazienki",
            imgSrc: bathroom,
            location: "Braciejówka",
            surface: '6',
            date: '2024',
        },

        {
            id: 'sas121kj',
            name: "Projekt domu",
            imgSrc: house,
            location: "Braciejówka",
            surface: '176',
            date: '2024',
        },

    ],
    architecture: [
        {
            id: 'sad23hj',
            name: "Projekt domu z garażem podziemnym",
            imgSrc: th1,
            location: "Olkusz",
            surface: '187',
            date: '2024',
        },
    ],
};
