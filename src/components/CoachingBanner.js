"use client";
import { motion } from "framer-motion";
import { slideAnimation } from "@/components/slideAnimation";
import { useState, useEffect, useRef } from "react";
import { fetchData } from "@/lib/api";
import { useInView } from "framer-motion";
import DecryptedText from "@/components/DecryptedText";

export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0.01 } } },
};

export const TypewriterComponent = ({ text }) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
  >
    {text?.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
const CoachingBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      const data = await fetchData(
        "/pages/889?_fields=acf.banner_options&acf_format=standard"
      );
      if (data) {
        setBannerData(data);
      } else {
        console.log("failed to fetch coaching banner");
      }
    };
    fetchBannerData();
  }, []);

  const combinedTitle = `${bannerData?.acf?.banner_options?.title_1 || ""} ${
    bannerData?.acf?.banner_options?.title_2 || ""
  }`.trim();

  return (
    <div ref={ref}>
      <div className="inner_banner relative">
        <img
          className="w-screen 2xl:h-auto xl:h-auto lg:h-[540px] md:h-auto sm:h-auto kx:h-[450px] km:h-[450px] object-cover"
          src={bannerData?.acf?.banner_options?.banner__image}
          alt="Banner"
        />
        <div className="absolute bg-[#00000046]  top-0 bottom-0 w-screen h-auto"></div>
        <div className="banner_top_text container px-10">
          <motion.div
            className="heading_top_banner absolute  2xl:top-[500px] xl:top-[400px] lg:top-48 md:top-60 sm:top-40 kx:top-52 km:top-48 right-0 2xl:left-20 xl:left-20 lg:left-26 md:left-8 sm:left-12 kx:left-10 km:left-8 mx-auto"
            {...slideAnimation("left")}
          >
            <h2 className="text-5xl 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg kx:text-base km:text-base 2xl:font-bold xl:font-bold lg:font-bold md:font-bold sm:font-bold kx:font-semibold km:font-semibold text-white relative 2xl:!leading-[50px] xl:!leading-[50px] lg:!leading-[40px] md:!leading-[30px] sm:!leading-[30px] kx:!leading-[20px] km:!leading-[20px] 2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-28 kx:left-0 km:left-0 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[50%] sm:w-[70%] kx:w-[80%] km:w-[80%]">
              <div className="left_line absolute top-6 -left-28 bg-white h-[1.5px] w-24"></div>
              <DecryptedText
                text={combinedTitle}
                speed={150}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </h2>
            <div className="text-white 2xl:text-lg xl:text-lg lg:text-lg sm:text-sm kx:text-sm km:text-sm 2xl:pt-4 xl:pt-4 lg:pt-4 md:pt-4 sm:pt-3 kx:pt-3 km:pt-3 2xl:w-auto xl:w-auto lg:w-auto md:w-1/2 sm:w-auto kx:w-auto km:w-auto 2xl:line-clamp-2 xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 kx:line-clamp-2 km:line-clamp-2">
              <TypewriterComponent
                text={bannerData?.acf?.banner_options?.banner_texts}
              />
            </div>
          </motion.div>
          <motion.div
            {...slideAnimation("right")}
            className="heading_button text-right 2xl:right-6 xl:right-6 lg:right-6 md:right-6 sm:right-6 kx:right-4 km:right-4 absolute 2xl:w-4/12 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:auto kx:w-11/12 km:w-11/12  2xl:bottom-14 xl:bottom-14 lg:bottom-6 md:bottom-6 sm:bottom-10 kx:bottom-4 km:bottom-4"
          >
            <h3 className="text-white 2xl:text-base xl:text-base lg:text-base md:text-xs sm:text-sm kx:text-xs km:text-xs font-medium  sm:hidden 2xl:line-clamp-2 xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 kx:line-clamp-2 km:line-clamp-2">
              <TypewriterComponent
                text={bannerData?.acf?.banner_options?.banner_button?.texts}
              />
            </h3>
            <button className="bg-[#FF8B00] hover:bg-[#ff8c00da] text-white py-3 font-medium px-6 rounded-full mt-4 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              {bannerData?.acf?.banner_options?.banner_button?.button_text}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoachingBanner;
