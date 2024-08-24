import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { explore1, explore2 } from "../utils/images";
import { explore } from "../utils/video";

export const Explore = () => {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.from("#explore", {
      scrollTrigger: {
        trigger: "#explore",
        start: "top 80%",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });

    gsap.from("#explore-1, #explore-2", {
      scrollTrigger: {
        trigger: "#explore-1",
        start: "50% 80%",
        end: "bottom 20%",
        toggleActions: "restart reverse restart reverse",
      },
      scale: 1.3,
      opacity: 0.5,
      duration: 1,
    });

    gsap.to("#design-video", {
      scrollTrigger: {
        trigger: "#design-video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      },
    });

    gsap.from("#exp-desc-1, #exp-desc-2", {
      scrollTrigger: {
        trigger: "#exp-desc-1",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });
  });

  return (
    <section className="h-full bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full px-5 pt-28 lg:mb-24 lg:px-0 lg:pt-40">
          <h2 id="explore" className="section-heading font-bold">
            Explore the full story.
          </h2>
        </div>

        <div className="flex flex-col overflow-hidden lg:items-start lg:justify-center">
          <div className="mb-24 mt-16 pl-12 md:pl-16 lg:mt-32">
            <h2 className="max-w-60 text-4xl lg:max-w-none lg:text-7xl lg:font-bold">
              iPhone. <br />
              Forged in titanium.
            </h2>
          </div>
        </div>

        <div className="flex grid-cols-2 grid-rows-2 flex-col items-center justify-center gap-4 sm:px-10 md:grid lg:gap-8 lg:pb-8">
          <div className="col-span-2 row-span-1 flex h-[450px] items-end justify-end bg-black lg:size-full">
            <video
              className="h-[80%] w-full object-cover"
              ref={videoRef}
              muted
              id="design-video"
              src={explore}
            ></video>
          </div>

          <div className="flex h-full items-center justify-center overflow-hidden bg-black sm:h-[450px] md:col-span-1 md:size-full lg:row-auto">
            <img id="explore-1" src={explore1} alt="explore" />
          </div>

          <div className="flex h-[450px] items-center justify-center overflow-hidden bg-black sm:h-[450px] md:col-span-1 md:size-full lg:row-auto">
            <img
              id="explore-2"
              className="object-cover"
              src={explore2}
              alt="explore"
            />
          </div>
        </div>

        <div className="text-container grid-cols-2 gap-4 px-20 py-10 pb-32 md:grid">
          <p
            id="exp-desc-1"
            className="mb-4 self-baseline text-xl font-medium text-gray-100 md:px-12"
          >
            iPhone 15 Pro is{" "}
            <span className="text-white">
              the first iPhone to feature an aerospace‑grade titanium design
            </span>
            , using the same alloy that spacecraft use for missions to Mars.
          </p>
          <p
            id="exp-desc-2"
            className="self-baseline text-xl font-medium text-gray-100 md:px-12"
          >
            Titanium has one of the best strength‑to‑weight ratios of any metal,
            making these our{" "}
            <span className="text-white">lightest Pro models ever</span>. You’ll
            notice the difference the moment you pick one up.
          </p>
        </div>
      </div>
    </section>
  );
};
