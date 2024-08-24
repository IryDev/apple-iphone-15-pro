import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { chip, frame } from "../utils/images";
import { genshin } from "../utils/video";

export const Chip = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "top 80%",
        end: "bottom 20%",
      },
      scale: 1.5,
      opacity: 0,
      duration: 1,
    });

    gsap.from("#a17", {
      scrollTrigger: {
        trigger: "#a17",
        start: "top 80%",
        end: "bottom 20%",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });

    gsap.from("#gpu", {
      scrollTrigger: {
        trigger: "#gpu",
        start: "top 80%",
        end: "bottom 20%",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });
  });

  return (
    <section className="common-padding">
      <div className="screen-max-width lg:px-none">
        <div className="flex flex-col items-center justify-center">
          <img
            id="chip"
            className="mb-10 size-24 lg:mb-20 lg:size-44"
            src={chip}
            alt="Apple A17 Pro chip"
          />
          <h2 className="text-4xl font-medium text-white lg:text-7xl">
            A17 Pro chip.
          </h2>
          <h2 className="mb-8 text-center text-4xl font-medium text-white lg:text-7xl">
            A monster win for gaming
          </h2>
          <h3 className="mb-8 text-center text-xl text-gray-100 lg:mb-20 lg:text-3xl">
            It’s here. The biggest redesign in the history of Apple GPUs.
          </h3>

          <div className="relative mb-12">
            <img className="relative z-10" src={frame} alt="frame" />
            <video
              className="absolute bottom-0 left-1/2 top-1/2 w-[calc(100%-15px)] -translate-x-1/2 -translate-y-1/2 rounded-[15px] md:rounded-[50px] lg:w-[calc(100%-30px)] lg:rounded-[50px]"
              muted
              loop
              autoPlay
              src={genshin}
            ></video>
          </div>

          <p className="font-medium text-gray-200">Honkai: Star Rail</p>

          <div className="mt-12 flex flex-col justify-between md:flex-row md:gap-24 lg:px-24">
            <div id="a17" className="flex max-w-[470px] flex-1 flex-col">
              <p className="text-xl text-gray">
                A17 Pro is an entirely new class of iPhone chip that delivers
                our
                <span className="text-white">
                  best graphics performance by far
                </span>
                .
              </p>
              <p className="mt-4 text-xl text-gray">
                Mobile{" "}
                <span className="text-white">
                  games will look and feel so immersive
                </span>
                , with incredibly detailed environments and more realistic
                characters. And with industry-leading speed and efficiency, A17
                Pro takes fast and runs with it.
              </p>
            </div>

            <div id="gpu" className="mt-12 flex-1 lg:mt-0">
              <p className="text-2xl font-medium text-gray">New</p>
              <p className="my-2 text-2xl font-bold lg:text-5xl">
                Pro-class GPU
              </p>
              <p className="text-2xl font-medium text-gray">with 6 cores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
