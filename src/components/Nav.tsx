import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { apple, bag, right, rightWhite, search } from "../utils/icons";
import { NavScroll } from "./NavScroll";

export const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    openNav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [openNav]);

  useGSAP(() => {
    gsap.from("#nav-price", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
    });
  });

  return (
    <>
      <header className="mx-auto max-w-[1024px]">
        <nav className="flex w-full items-center justify-between p-4 md:justify-center lg:py-3">
          <img
            className="md:hidden"
            src={apple}
            alt="Apple"
            width={15}
            height={15}
          />
          <ul className="hidden w-full items-center justify-between md:flex">
            <img src={apple} alt="Apple" width={12} height={12} />
            {navLinks.map((link) => (
              <li key={link}>
                <a className="text-xs text-gray" href="#">
                  {link}
                </a>
              </li>
            ))}
            <img src={search} alt="search" width={15} height={15} />
            <img width={15} height={15} src={bag} alt="bag" />
          </ul>

          <div className="flex items-center gap-6 md:hidden">
            <img src={search} alt="search" width={15} height={15} />
            <img width={15} height={15} src={bag} alt="bag" />

            <button
              onClick={() => setOpenNav(!openNav)}
              className="relative z-50 flex h-5 w-4 gap-2 lg:hidden"
            >
              <div
                className={`absolute ${
                  openNav
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-1 rotate-0"
                } bottom-1/2 left-1/2 top-1/2 h-[1px] w-full origin-center -translate-x-1/2 bg-white duration-300`}
              ></div>
              <div
                className={`absolute ${
                  openNav
                    ? "translate-y-0 -rotate-45"
                    : "translate-y-1 rotate-0"
                } bottom-1/2 left-1/2 top-1/2 h-[1px] w-full origin-center -translate-x-1/2 bg-white duration-300`}
              ></div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`absolute top-0 z-40 w-full bg-[#161617] transition-all duration-700 ${
          openNav ? "h-full" : "pointer-events-none h-0 opacity-0"
        }`}
      >
        <div className="flex h-full w-full flex-col p-12 pr-5">
          <ul className="flex w-full flex-col justify-between">
            {navLinks.map((link) => (
              <li
                key={link}
                className="group flex w-full cursor-pointer items-center justify-between"
              >
                <a className="text-2xl font-medium text-white" href="#">
                  {link}
                </a>

                <img
                  className="group rotate-180 opacity-0 duration-300 group-hover:opacity-100"
                  src={rightWhite}
                  alt="right"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <NavScroll />

      <div
        id="nav-price"
        className="mb-4 flex min-h-16 items-center justify-center bg-[#1d1d1f] lg:min-h-24"
      >
        <p className="max-w-[270px] text-center text-xs font-light md:max-w-[400px] md:text-base">
          Get $170–$620 in credit toward iPhone 15 Pro when you trade in iPhone
          11 or higher.*{" "}
          <span className="inline items-center text-blue">
            Buy <img className="inline" width={5} src={right} alt="" />
          </span>
        </p>
      </div>
    </>
  );
};
