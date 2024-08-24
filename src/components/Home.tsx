import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { hero, smallHero } from "../utils/video";

export const Home = () => {
  const [srcVideo, setSrcVideo] = useState(
    window.innerWidth > 768 ? hero : smallHero,
  );

  const handleResize = () => {
    setSrcVideo(window.innerWidth > 768 ? hero : smallHero);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.from("#title", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
    });

    gsap.from("#video", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from("#buy", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1.5,
    });

    gsap.from("#price", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 2,
    });
  }, []);

  return (
    <section className="">
      <header className="flex min-h-[calc(100vh-160px)] w-full flex-col items-center justify-center pb-20">
        <h1 id="title" className="text-3xl font-medium text-gray-200">
          iPhone 15 Pro
        </h1>
        <div className="max-w-96 md:w-10/12 md:max-w-none">
          <video id="video" autoPlay muted src={srcVideo}></video>
        </div>
        <button
          id="buy"
          className="mb-8 rounded-full bg-blue px-5 py-2 text-white transition-colors duration-300 hover:bg-blueHover"
        >
          Buy
        </button>
        <p id="price" className="text-center text-xl font-medium text-white">
          From $999 or $41.62/mo. for 24 mo.
        </p>
      </header>
    </section>
  );
};
