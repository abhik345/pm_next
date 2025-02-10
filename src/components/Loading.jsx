// "use client"
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = ({ onComplete }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text5 = textRef.current;
    if (!text5) return;

    const characters = text5.innerText.split("").map((char) => (
      `<span class='_text3' style='display: inline-block'>${char}</span>`
    ));
    text5.innerHTML = characters.join("");
    const spans = text5.querySelectorAll("span");

    const tl_5 = gsap.timeline({ repeat: -1 });
    tl_5
      .from(spans, { opacity: 0, x: 40, stagger: 0.1, ease: "power1.out" })
      .to(spans, { opacity: 0, x: -40, stagger: 0.1, ease: "power1.out" }, "+=1.5");

    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="container_loader wrap flex h-[100vh] w-full m-0 justify-center items-center flex-col">
      <h2 className="font-display font-bold text-[40px] mt-4 effect5">
        <span className="text5" ref={textRef}>Pramod Maloo.</span>
      </h2>
    </div>
  );
};

export default Loading;
