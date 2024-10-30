"use client";
import { useState, useEffect,useRef } from 'react';
import { fetchData } from '@/lib/api';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth<576);
  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const fetchBannerData = async () => {
      const data = await fetchData('/pages/10?_fields=acf.banner_section_options&acf_format=standard');
      if (data) {
        setBannerData(data.acf.banner_section_options);
      } else {
        console.log('Failed to fetch banner data');
      }
    };

    fetchBannerData();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".cite-with-line", { autoAlpha: 0 });
    tl.fromTo(
      ".cite-with-line",
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, duration: 1.75, stagger: 0.2 }
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth<576);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[700px] object-cover flex items-center justify-center">
      <div className="banner_video absolute inset-0 w-full h-full">
        {isMobile === false ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={bannerData?.inner_banner_video}
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={bannerData?.banner_video}
          />
        )}
      </div>
      <div className="bg-gradient-to-b"></div>
      <div className="sm:px-5 md:w-[62%] sm:w-[50%]">
      </div>
    </div>
  );
};

export default Banner;


// gsap.registerPlugin(ScrollTrigger);

// const useGsap = (animation, dependencies = []) => {
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       animation();
//     });

//     return () => ctx.revert();
//   }, dependencies);
// };

// const splitText = (text) => {
//   const words = text.split(" ");
//   return words;
// };
// const TextRevealAnimation = ({ total }) => {
//   const textRef = useRef();
//   useGsap(() => {
//     const chars = textRef.current.querySelectorAll(".char");

//     const createScrollTrigger = (triggerElement, timeline) => {
//       ScrollTrigger.create({
//         trigger: triggerElement,
//         start: "top bottom",
//         onLeaveBack: () => {
//           timeline.progress(0);
//           timeline.pause();
//         },
//       });

//       ScrollTrigger.create({
//         trigger: triggerElement,
//         start: "top 60%",
//         onEnter: () => timeline.play(),
//       });
//     };

//     const tl = gsap.timeline({ paused: true });
//     tl.from(chars, {
//       opacity: 0,
//       yPercent: 100,
//       duration: 0.5,
//       ease: "back.out(2)",
//       stagger: { amount: 0.5 },
//     });
//     createScrollTrigger(textRef.current, tl);
//   }, []);

//   const text = total?.banner_text || "";
//   const textArray = splitText(text);

//   return (
//     <div className="relative z-10 flex items-center justify-center flex-col pt-[300px]">
//       <p
//         ref={textRef}
//         className="text-white text-xs text-container words-slide-up md:text-2xl sm:text-xs md:py-3	"
//       >
//         {textArray.map((word, wordIndex) => (
//           <>
//             <span
//               key={wordIndex}
//               className="inline-block char md:text-2xl sm:text-xs"
//             >
//               {word}
//             </span>
//             <span className="mx-1"></span>
//           </>
//         ))}
//       </p>
//     </div>
//   );
// };

// TextRevealAnimation.propTypes = {
//   total: PropTypes.object,
// };

// export { TextRevealAnimation };

