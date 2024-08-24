import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { right, watch } from "../utils/icons";
import { VideoCarousel } from "./VideoCarousel";

export const Highlights = () => {
  useGSAP(() => {
    gsap.from("#highlights", {
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });

    gsap.from("#film", {
      scrollTrigger: {
        trigger: "#film",
        start: "top 70%",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });

    gsap.from("#event", {
      scrollTrigger: {
        trigger: "#event",
        start: "top 60%",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });
  });

  return (
    <section className="md:common-padding h-full w-screen overflow-hidden bg-zinc">
      <div className="screen-max-width pb-10">
        <div className="mb-8 flex flex-col justify-between p-5 py-10 lg:flex-row lg:items-center lg:p-0 lg:pt-40">
          <h3 id="highlights" className="section-heading font-bold">
            Get the highlights.
          </h3>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
            <p id="film" className="flex text-blue">
              Watch the film
              <img className="ml-2" src={watch} alt="watch" />
            </p>
            <p id="event" className="flex items-center text-blue">
              Watch the event
              <img className="ml-2" src={right} alt="right" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
