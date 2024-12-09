import React, { useRef, useTransition } from "react";
import { Socials } from "../../common/arrays";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [isPending, startTransition] = useTransition();

    const handleSuccess = () => {
        toast.success("Twoja wiadomość została wysłana!");
    };

    const handleError = () => {
        toast.error("Coś poszło nie tak, spróbuj ponownie");
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;

        startTransition(() => {
            emailjs
                .sendForm(
                    "service_8dmom44",
                    "template_72vp56w",
                    formElement,
                    "qinHI3AZKFIHdiS83"
                )
                .then((result) => {
                    if (result.text === "OK") {
                        formElement.reset();
                        handleSuccess();
                    }
                })
                .catch(() => {
                    handleError();
                });
        });
    };

    return (
        <div className="min-h-screen max-w-3xl m-auto md:py-20 py-12">
            <motion.div
                initial={{ y: "-30%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="grid md:grid-cols-2 w-full gap-8 md:mb-32 mb-12 px-4"
            >
                <div className="grid md:gap-16 gap-4">
                    <h1 className="text-dark md:text-4xl text-2xl text-center">
                        Skontaktuj się ze mną
                    </h1>
                    <div className="flex gap-8 justify-center">
                        {Socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <social.icon className="text-buttons duration-300 hover:scale-75 md:text-[32px] text-3xl" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid md:justify-end justify-center md:text-xl text-lg">
                    <a className="md:text-right text-center">
                        Adres Barbara <p>Olkusz 32-300</p>
                    </a>
                    <div className="grid">
                        <a href="mailto:">kontakt.sbpracownia.pl </a>
                        <a
                            className="md:text-right text-center"
                            href="tel:+605629897"
                        >
                            605 629 897
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.form
                onSubmit={sendEmail}
                ref={form}
                initial={{ y: "30%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="grid gap-8 m-auto px-4"
            >
                <div className="md:grid flex flex-col md:grid-cols-2 justify-around gap-8 w-full">
                    <label>
                        <legend>Imię *</legend>
                        <input
                            type="text"
                            name="name"
                            required
                            className="bg-bright border-b w-full  py-2 text-dark focus:outline-none"
                        />
                    </label>
                    <label>
                        <legend>Nazwisko *</legend>
                        <input
                            type="text"
                            name="surname"
                            required
                            className="bg-bright border-b py-2 w-full text-dark focus:outline-none "
                        />
                    </label>
                </div>

                <label className="w-full">
                    <legend>E-Mail *</legend>
                    <input
                        type="email"
                        name="email"
                        required
                        className="bg-bright border-b py-2 w-full text-dark focus:outline-none"
                    />
                </label>

                <label className="w-full">
                    <legend>Wiadomość *</legend>
                    <textarea
                        
                        name="message"
                        required
                        className="bg-bright border-b w-full resize-none py-2 text-dark focus:outline-none"
                    />
                </label>

                <button className="m-auto group relative overflow-hidden rounded-xl bg-[#8b6d6a] md:px-12 px-8 md:py-3 py-2 text-bright transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-dark hover:bright ">
                    <span className="ease absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 transform bg-bright opacity-50  transition-all duration-700 group-hover:-translate-x-80"></span>
                    <span className="relative md:text-xl ">
                        {isPending ? "Wysyłanie..." : "Wyślij"}
                    </span>
                </button>
            </motion.form>
        </div>
    );
};
