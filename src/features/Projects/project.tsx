import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import supabase from "../../core/supabase";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../common/Images/BrightLogo.svg";
import { ProjectsLinks } from "../../common/arrays";

export const Project = () => {
    const { id } = useParams();
    const [images, setImages] = useState<string[]>([]);
    const [fullScreen, setFullScreen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project =
        ProjectsLinks.interiors.find((p) => p.id === id) ||
        ProjectsLinks.architecture.find((p) => p.id === id);

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage
                .from("Images")
                .list(id, {
                    limit: 300,
                    sortBy: { column: "name", order: "asc" },
                });

            if (error) {
                console.error("Error fetching images:", error);
                return;
            }
            const urls = data.map(
                (file) =>
                    supabase.storage
                        .from("Images")
                        .getPublicUrl(`${id}/${file.name}`).data.publicUrl
            );
            setImages(urls);
        };
        fetchImages();
    }, [id]);

    const openFullScreen = (index: number) => {
        setCurrentImageIndex(index);
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
    };

    const handleImageContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    return (
        <section>
            <div
                className="hero min-h-screen grid gap-8 shadow-5xl"
                style={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="grid gap-8 justify-center">
                    <motion.div
                        initial={{ y: "-30%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="grid items-center justify-center md:p-12 p-4 md:gap-8 gap-4 w-full"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: "100%" }}
                            className="md:max-w-20 w-full m-auto   max-w-12"
                        />
                        <h1 className="lg:text-8xl text-center md:text-5xl text-3xl text-bright tracking-widest m-0 ">
                            {project?.name}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ y: "30%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="text-bright grid gap-2 justify-center md:text-2xl text-lg"
                    >
                        <p>Lokalizacja: {project?.location} </p>
                        <p>Metraż: {project?.surface} m2</p>
                        <p>Data realizacji: {project?.date}.r</p>
                    </motion.div>
                </div>
            </div>

            <div className="grid gap-8 justify-center md:p-12 p-4">
                {images.length > 0 ? (
                    images.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={` ${index + 1}`}
                            className="max-w-5xl w-full h-auto cursor-pointer transition duration-300 hover:scale-[1.02]"
                            onClick={() => openFullScreen(index)}
                        />
                    ))
                ) : (
                    <p>Loading images...</p>
                )}
            </div>

            {fullScreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 bottom-0 right-0 z-[20] w-full h-full bg-dark bg-opacity-95 p-10 sm:p-3 m-auto"
                >
                    <Swiper
                        centeredSlides={true}
                        slidesPerView={1}
                        modules={[Navigation]}
                        spaceBetween={100}
                        loop={false}
                        navigation={true}
                        grabCursor
                        initialSlide={currentImageIndex}
                        className="w-full h-full flex justify-center items-center"
                    >
                        {images.map((url, index) => (
                            <SwiperSlide
                                style={{ display: "flex" }}
                                key={index}
                                className="flex swiper-button-next:color-bright  justify-center items-center w-[calc(100%-40px)] h-[calc(100%-40px)]"
                            >
                                <motion.img
                                    src={url}
                                    alt={`Large image ${index + 1}`}
                                    className="max-h-full m-auto max-w-full select-none"
                                    onContextMenu={handleImageContextMenu}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <style>
                        {`
                            .swiper-button-next, .swiper-button-prev 
                            {
                                color: #ffffff; /* Na przykład #ffffff */
                            }
                        `}
                    </style>
                    <button
                        onClick={closeFullScreen}
                        className="fixed z-10 top-5 right-20 text-bright hover:scale-125 transition-transform duration-300 sm:right-2.5 bg-transparent border-none"
                    >
                        <AiOutlineClose size={35} />
                    </button>
                </motion.div>
            )}
        </section>
    );
};