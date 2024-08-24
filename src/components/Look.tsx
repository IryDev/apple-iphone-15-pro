import { useGSAP } from "@gsap/react";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animation";
import { blueImg } from "../utils/images";
import { ModelView } from "./ModelView";
import { SwitcherColor } from "./SwitcherColor";

export const Look = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: `iPhone 15 Pro in Blue Titanium`,
    titleLarge: `iPhone 15 Pro Max in Blue Titanium`,
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  });

  const root: HTMLElement = document.getElementById("root")!;

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const tl = gsap.timeline();

  useGSAP(() => {
    gsap.from("#closer", {
      scrollTrigger: {
        trigger: "#closer",
        start: "top 80%",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });
  });

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  return (
    <section className="common-padding h-full">
      <div className="screen-max-width">
        <div className="w-full">
          <h2 id="closer" className="section-heading font-bold">
            Take a closer look.
          </h2>
        </div>

        <div className="mt-5 hidden flex-col items-center lg:flex">
          <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="h-full w-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={root}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-xs font-light">
              {size === "small" ? model.title : model.titleLarge}
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="flex h-14 w-44 items-center justify-between rounded-full bg-[#2e2e30] p-4">
                {models.map((item, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name="colorModel"
                      id={item.title}
                      onClick={() => setModel(item)}
                      defaultChecked={index === 1}
                      className="peer hidden"
                    />
                    <label
                      htmlFor={item.title}
                      className="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition-colors duration-500 peer-checked:border-2 peer-checked:border-white"
                    >
                      <span
                        style={{
                          backgroundColor: item.color[0],
                        }}
                        className={`block size-6 overflow-hidden rounded-full bg-center`}
                      ></span>
                    </label>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSize(size === "small" ? "large" : "small")}
                className={`items-center justify-between rounded-full ${
                  size === "small"
                    ? "after:translate-x-0"
                    : "after:translate-x-14"
                } relative grid h-14 w-28 grid-cols-2 bg-[#2e2e30] after:absolute after:bottom-0 after:left-1 after:top-1/2 after:z-10 after:size-[48px] after:-translate-y-1/2 after:rounded-full after:bg-white after:transition-transform after:duration-700 after:content-['']`}
              >
                {sizes.map(({ label, value }) => (
                  <span
                    className={`${
                      size !== value ? "text-white" : "text-black"
                    } z-20 transition-colors delay-200 duration-700`}
                    key={value}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:hidden">
          <SwitcherColor />
        </div>
      </div>
    </section>
  );
};
