import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { iosBattery, iosSignal, iosWifi } from "../utils/icons";
import { framePortrait } from "../utils/images";
import {
  Contacts,
  Favorites,
  KeyPad,
  Recents,
  Voicemail,
} from "./CallAppComponents";
import { NavCallApp } from "./NavCallApp";

export const CallApp = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useGSAP(() => {
    gsap.from(".phone", {
      scrollTrigger: {
        trigger: ".phone",
        toggleActions: "restart none none none",
      },
      opacity: 0,
      duration: 1.5,
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("fr", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="phone relative my-12 h-[670px]">
        <img
          className="pointer-events-none relative z-10 h-[670px]"
          src={framePortrait}
          alt=""
        />

        <div className="absolute left-[50%] top-[50%] z-0 h-[calc(670px-15px)] w-[calc(100%-15px)] translate-x-[-50%] translate-y-[-50%] rounded-[45px] bg-white p-6 pb-24">
          <div className="fixed left-0 top-6 flex h-2 w-[calc(100%-5px)] items-center justify-between px-4 pl-11">
            <span className="text-sm font-bold text-black">{time}</span>

            <div className="status flex items-center gap-2 pr-2">
              <img width="15" height="15" src={iosSignal} alt="" />
              <img width="15" height="15" src={iosWifi} alt="" />
              <img width="25" height="25" src={iosBattery} alt="" />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<KeyPad />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/voicemail" element={<Voicemail />} />
            <Route path="/recents" element={<Recents />} />
          </Routes>
          <NavCallApp />

          <div className="absolute bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 rounded-3xl bg-black" />
        </div>
      </div>
    </>
  );
};
