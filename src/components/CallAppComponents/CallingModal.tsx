import { useEffect, useState } from "react";
import { buttonCalling } from "../../constants";
import { iosBattery, iosSignal, iosWifi } from "../../utils/icons";

export type CallingModalProps = {
  number: string;
  active: boolean;
  closeModal: () => void;
};

export const CallingModal = (props: CallingModalProps) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

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
      <div
        className={`size-full ${
          props.active ? "block" : "hidden"
        } bg-calling-screen absolute top-1/2 z-30 -translate-y-1/2 rounded-[45px]`}
      >
        <div className="fixed left-0 top-6 flex h-2 w-[calc(100%-5px)] items-center justify-between px-4 pl-11">
          <span className="text-sm font-bold text-white">{time}</span>

          <div className="status flex items-center gap-2 pr-2">
            <img
              className="invert"
              width="15"
              height="15"
              src={iosSignal}
              alt="signal"
            />
            <img
              className="invert"
              width="15"
              height="15"
              src={iosWifi}
              alt="wifi"
            />
            <img
              className="invert"
              width="25"
              height="25"
              src={iosBattery}
              alt="battery"
            />
          </div>
        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="text-[#8d8d8d]">Calling...</p>
            <p className="text-2xl font-bold">{props.number}</p>
          </div>

          <div className="mt-72 grid grid-cols-3 gap-7">
            {buttonCalling.map((button) => (
              <div key={button.name} className="flex flex-col items-center">
                <button
                  style={{
                    backgroundColor: button.color,
                  }}
                  className="flex size-[60px] items-center justify-center rounded-full"
                  onClick={() => {
                    if (button.name === "End") {
                      props.closeModal();
                    }
                  }}
                >
                  <img
                    width={button.width || "25px"}
                    className=""
                    src={button.icon}
                    alt=""
                  />
                </button>

                <p className="mt-1 text-xs">{button.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 rounded-3xl bg-[#8d8d8d]" />
      </div>
    </>
  );
};
