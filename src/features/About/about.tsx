import barbara2 from "../../common/Images/AboutImages/barbara2.jpg";
import darkLogo from "../../common/Images/DarkLogo.svg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section>
            <div className=" text-center md:p-16 p-6  relative">
                <img
                    src={darkLogo}
                    alt="logo"
                    className="absolute max-w-3xl opacity-5 w-full m-auto left-0 right-0 top-0 bottom-0 "
                />

                <h2 className=" md:text-5xl text-3xl md:mb-16 mb-8 z-[2] font-medium text-dark">
                    Barbara Szwala
                </h2>

                <div className="md:flex grid md:gap-8 gap-4 max-w-screen-lg m-auto">
                    <motion.img
                        initial={{ x: "-5%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        src={barbara2}
                        alt="Barbara"
                        className="m-auto z-[2]  md:max-w-lg max-w-64 w-full"
                    />
                    <div className="grid md:gap-12 gap-6 z-[2]">
                        <motion.div
                            initial={{ x: "5%", opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className="grid md:gap-4 gap-2"
                        >
                            <p className="md:text-xl text-lg text-justify text-dark opacity-90">
                                <p>
                                    Zawsze interesowało mnie jak miejsce, w
                                    którym żyjemy na nas wpływa. W pewnym
                                    momencie zdałam sobie sprawę, że to właśnie
                                    architektura jest nie tylko kwestią funkcji
                                    i estetyki, ale także fundamentalnym
                                    elementem kształtującym życie społeczne i
                                    indywidualne doświadczenia ludzi. I w taki
                                    sposób postanowiłam kształcić się w tym
                                    temacie i wybrać architekturę na moją
                                    ścieżkę zawodową.
                                </p>

                                <p className="my-4">
                                    Nazywam się Barbara Szwala i ukończyłam
                                    studia na kierunku Architektura z tytułem
                                    magistra inżyniera architekta, gdzie przez
                                    lata zdobywałam wiedzę i doświadczenie w
                                    zakresie projektowania.
                                </p>

                                <p className="my-4">
                                    W swoich pracach stawiam na połączenie
                                    funkcjonalności, estetyki i prostoty z
                                    oczekiwaniami i indywidualnymi preferencjami
                                    Klientów.
                                </p>
                                <p className="my-4">
                                    Do każdego projektu podchodzę z sumiennością
                                    i poczuciem odpowiedzialności, ponieważ
                                    wiem, że przestrzeń, w której żyjemy wpływa
                                    na to jak się czujemy i jak funkcjonujemy.
                                </p>

                                <p>
                                    Jeżeli chcesz wiedzieć jaka jestem prywatnie
                                    to z natury jestem optymistką i
                                    perfekcjonistką, która lubi sobie stawiać
                                    poprzeczkę wysoko i cierpliwie dążyć do
                                    wyznaczonego celu. Odpoczywam najczęściej
                                    podczas spacerów z psim kompanem Topkiem
                                    albo podczas trekkingu po górach.
                                </p>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
