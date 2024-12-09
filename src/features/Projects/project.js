import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import supabase from "../../core/supabase";

// // declare const require: {
// //     context(
// //         path: string,
// //         recursive: boolean,
// //         regExp: RegExp
// //     ): {
// //         keys(): string[];
// //         <T>(id: string): T;
// //     };
// // };

// const openImage = {
//     opacity: 1,
//     scale: 1,
// };

// const closeImage = {
//     opacity: 0,
//     scale: 0,
// };

// const openWrapper = {
//     opacity: 1,
// };

// const closeWrapper = {
//     opacity: 0,
// };

export const Project = () => {
    const { id } = useParams();
    const [images, setImages] = useState([]);

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
    }, []);

    return (
        <section>
            <div className="grid gap-4">
                {images.length > 0 ? (
                    images.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="max-w-full h-auto"
                        />
                    ))
                ) : (
                    <p>Loading images...</p>
                )}
            </div>

            {/* <div
                className="hero min-h-screen grid gap-8"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="grid gap-8">
                    <motion.div
                        initial={{ y: "-30%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="flex items-center justify-center p-24 md:gap-8 gap-4 w-full"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="md:max-w-20 max-w-12 w-full"
                        />
                        <h1 className="lg:text-8xl  md:text-5xl text-3xl text-bright text-center tracking-widest m-0 whitespace-nowrap">
                            {project?.name}
                        </h1>
                    </motion.div>

                    <div className="text-bright grid justify-center text-xl">
                        <p>Lokalizacja:{project?.location} </p>
                        <p>Metraż: {project?.surface} m2</p>
                        <p>Data realizacji: {project?.date}.r</p>
                    </div>
                </div>
            </div>

            <div className="min-h-screen  text-center md:p-24 p-6  relative">
                <div className="grid  gap-8">
                    {largeImageKeys.map((imageKey, index) => (
                        <img
                            src={smallImagesFolder(imageKey)}
                            onClick={() => openFullScreen(index)}
                            key={index}
                            alt="Project"
                            className="max-w-screen-lg w-full m-auto cursor-pointer duration-300 hover:opacity-90 "
                        />
                    ))}
                </div>
            </div>

            {fullScreen && (
                <motion.div
                    initial={closeWrapper}
                    animate={fullScreen ? openWrapper : closeWrapper}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 bottom-0 right-0 z-10 w-full h-full bg-dark bg-opacity-95 p-10 sm:p-3 m-auto"
                >
                    <Swiper
                        centeredSlides
                        slidesPerView={1}
                        modules={[Navigation]}
                        spaceBetween={100}
                        loop={false}
                        navigation
                        grabCursor
                        initialSlide={currentImageIndex}
                        className="w-full h-full flex justify-center items-center
                    [&_.swiper-button-prev]:!text-bright
                    [&_.swiper-button-next]:!text-bright"
                    >
                        {largeImageKeys.map((imageKey) => (
                            <SwiperSlide
                                key={imageKey}
                                className="flex justify-center items-center w-[calc(100%-40px)] h-[calc(100%-40px)]"
                            >
                                <motion.img
                                    src={largeImagesFolder(imageKey)}
                                    alt="large"
                                    className="max-h-full m-auto max-w-full select-none"
                                    onContextMenu={handleImageContextMenu}
                                    initial={closeImage}
                                    animate={
                                        fullScreen ? openImage : closeImage
                                    }
                                    transition={{ duration: 0.5 }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        onClick={() => closeFullScreen()}
                        className="fixed z-10 top-5 right-20 text-bright hover:scale-125 transition-transform duration-300 sm:right-2.5 bg-transparent border-none"
                    >
                        <AiOutlineClose size={35} />
                    </button>
                </motion.div>
            )} */}
        </section>
    );
};
