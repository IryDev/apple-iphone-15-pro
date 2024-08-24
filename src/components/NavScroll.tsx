import { useEffect, useState } from "react";
import { chevronDown } from "../utils/icons";

export const NavScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showNav) {
      document.querySelector("main")?.classList.add("blurFltr");
      document.querySelector("footer")?.classList.add("blurFltr");
    } else {
      document.querySelector("main")?.classList.remove("blurFltr");
      document.querySelector("footer")?.classList.remove("blurFltr");
    }

    window.addEventListener("scroll", () => {
      document.querySelector("main")?.classList.remove("blurFltr");
      setShowNav(false);
    });
  }, [showNav]);

  return (
    <>
      <div className="navMobileScrollBg fixed left-0 top-0 z-[1000] w-full">
        <div
          className={`height-transition nav-on-scroll fixed left-0 top-0 z-[1000] ${
            scrollY > 350 ? "translate-y-[0]" : "-translate-y-[200px]"
          } ${
            showNav ? "h-44" : "overflow-hidden md:overflow-visible"
          } flex h-12 w-full flex-col items-center border-b border-white/30 bg-black/50 p-4 py-6 pt-2 backdrop-blur-lg lg:!h-12 lg:!items-center`}
        >
          <div className="flex w-full items-center justify-between lg:max-w-[1024px]">
            <p className="text-lg font-medium text-white">iPhone 15 Pro</p>
            <div className="flex items-center justify-center gap-4">
              <ul className="relative hidden gap-4 md:flex">
                <li className="relative text-xs text-white after:absolute after:-bottom-[18px] after:left-0 after:h-[1px] after:w-full after:bg-white after:content-['']">
                  Overview
                </li>

                <li className="cursor-pointer text-xs text-gray-100 hover:text-white">
                  Switch from android to iphone
                </li>

                <li className="cursor-pointer text-xs text-gray-100 hover:text-white">
                  Tech Specs
                </li>
              </ul>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setShowNav(!showNav)}
                  className="cursor-pointer"
                >
                  <img
                    src={chevronDown}
                    className={`transition-transform ${
                      showNav
                        ? "[transform:rotateX(180deg)]"
                        : "[transform:rotateX(0deg)]"
                    } duration-300 md:hidden`}
                    alt="Chevron Down"
                    width="15"
                    height="15"
                  />
                </button>

                <button className="rounded-full bg-blue px-4 py-1 text-xs text-white transition-colors duration-300 hover:bg-blueHover">
                  Buy
                </button>
              </div>
            </div>
          </div>

          <ul
            className={`mt-6 ${
              showNav ? "opactity-100 delay-500" : "opacity-0 delay-0"
            } flex flex-col gap-4 self-baseline pl-8 duration-300 lg:hidden`}
          >
            <li className="relative text-sm font-light after:absolute after:-bottom-0 after:-left-4 after:top-1/2 after:h-1/2 after:w-[1px] after:-translate-y-1/2 after:bg-white">
              Overview
            </li>
            <li className="cursor-pointer text-sm text-gray-100 transition-colors hover:text-white">
              Switch from android to iPhone
            </li>
            <li className="cursor-pointer text-sm text-gray-100 transition-colors hover:text-white">
              Tech Specs
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
