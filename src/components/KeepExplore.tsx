import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { right } from "../utils/icons";
import {
  iPhone15ProChipIcon,
  iPhone15ProIcon3Camera,
  iPhone15ProLarge,
  iPhone15ProLarge2,
  iconBatteryIphone15Pro,
  iconCameraIPhone15,
  iconIPhone15,
} from "../utils/images";

export const KeepExplore = () => {
  useGSAP(() => {
    gsap.from("#keep-exploring-title", {
      scrollTrigger: {
        trigger: "#keep-exploring-title",
        start: "top 80%",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });

    gsap.from("#keep-exploring-subtitle", {
      scrollTrigger: {
        trigger: "#keep-exploring-subtitle",
        start: "top 50%",
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });
  });

  const colors: string[] = ["#8f8a81", "#202630", "#c9c8c2", "#242526"];
  const colorsiPhone15: string[] = [
    "#e4c8ca",
    "#e5e0c1",
    "#cad4c5",
    "#ced5d9",
    "#35393b",
  ];

  return (
    <section className="common-padding bg-black lg:bg-zinc">
      <div className="screen-max-width">
        <div className="mb-8 flex flex-col justify-between px-4 pb-10 lg:flex-row lg:items-center lg:px-0">
          <h3 id="keep-exploring-title" className="section-heading font-bold">
            Keep exploring iPhone.
          </h3>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
            <p id="keep-exploring-subtitle" className="flex text-xl text-blue">
              Explore all iPhone
              <img className="ml-2" src={right} alt="" />
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-3xl bg-black lg:p-12">
          <div className="flex items-baseline justify-center">
            <div className="col-1 flex flex-col md:items-center">
              <div className="col-1 flex max-w-80 flex-col gap-6 md:items-center">
                <img
                  className="max-w-40 duration-300 hover:scale-[1.02] lg:max-w-72 lg:p-4"
                  src={iPhone15ProLarge}
                  alt=""
                />
                <div className="flex space-x-2">
                  {colors.map((color, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        style={{ backgroundColor: color }}
                        className="size-3 rounded-full"
                      ></div>
                    </div>
                  ))}
                </div>

                <p className="text-xl lg:text-2xl">iPhone 15 Pro</p>
                <p className="mb-4 text-sm lg:text-base">
                  From $999 or $41.62/mo. for 24 mo.1
                </p>
                <div className="flex flex-col gap-4 md:flex-row">
                  <p className="py-2 text-gray lg:py-3">Currently viewing</p>
                  <p className="flex items-center gap-2 text-blue">
                    Buy <img src={right} alt="" />
                  </p>
                </div>
              </div>

              <div className="my-16 h-[1px] w-full bg-[#424245]"></div>

              <div className="grid max-w-[300px] grid-rows-[repeat(3,200px)] gap-12 pr-2">
                <div className="flex flex-col items-baseline gap-2 md:items-center">
                  <img className="size-14" src={iPhone15ProChipIcon} alt="" />
                  <p className="text-2xl md:text-center">
                    A17 Pro chip with 6-core GPU
                  </p>
                </div>

                <div className="flex flex-col items-baseline justify-start gap-2 md:items-center">
                  <img
                    className="size-14"
                    src={iPhone15ProIcon3Camera}
                    alt=""
                  />
                  <p className="text-2xl">Pro camera system</p>
                  <p className="text-xs md:text-center">
                    Our most advanced 48MP Main camera 3x or 5x Telephoto camera
                    Ultra Wide camera
                  </p>
                </div>

                <div className="flex flex-col items-baseline md:items-center lg:items-center">
                  <img
                    className="size-14 object-contain"
                    src={iconBatteryIphone15Pro}
                    alt=""
                  />
                  <p className="text-2xl md:text-center">
                    Up to 29 hours video playback
                  </p>
                </div>
              </div>
            </div>

            <div className="col-2 flex flex-col">
              <div className="flex max-w-80 flex-col items-baseline gap-6 md:items-center">
                <img
                  className="max-w-40 duration-300 hover:scale-[1.02] lg:max-w-72 lg:p-4"
                  src={iPhone15ProLarge2}
                  alt=""
                />

                <div className="flex space-x-2">
                  {colorsiPhone15.map((color, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        style={{ backgroundColor: color }}
                        className="size-3 rounded-full"
                      ></div>
                    </div>
                  ))}
                </div>
                <p className="text-xl lg:text-2xl">iPhone 15</p>
                <p className="mb-4 text-sm lg:text-base">
                  From $999 or $41.62/mo. for 24 mo.1
                </p>
                <div className="flex flex-col items-baseline gap-4 md:flex-row">
                  <p className="rounded-3xl bg-blue px-5 py-2 lg:px-6 lg:py-3">
                    Learn more
                  </p>
                  <p className="flex items-center gap-2 text-blue">
                    Buy <img src={right} alt="" />
                  </p>
                </div>
              </div>

              <div className="my-16 h-[1px] w-full bg-[#424245]"></div>

              <div className="grid max-w-[300px] grid-rows-[repeat(3,200px)] gap-12 pl-2">
                <div className="flex flex-col items-baseline gap-2 md:items-center">
                  <img className="size-14" src={iconIPhone15} alt="" />
                  <p className="text-2xl md:text-center">
                    A16 Bionic chip with 5-core GPU
                  </p>
                </div>

                <div className="flex flex-col items-baseline justify-start gap-2 md:items-center">
                  <img className="size-14" src={iconCameraIPhone15} alt="" />
                  <p className="text-2xl md:text-center">
                    Advanced dual-camera system
                  </p>
                  <p className="text-xs md:text-center">
                    48MP Main camera 2x Telephoto Ultra Wide camera
                  </p>
                </div>

                <div className="flex flex-col items-baseline md:items-center lg:items-center">
                  <img
                    className="size-14 object-contain"
                    src={iconBatteryIphone15Pro}
                    alt=""
                  />
                  <p className="text-2xl md:text-center">
                    Up to 26 hours video playback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
