import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";

export const LoaderModel = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        setWidth((prevWidth) => prevWidth + 1);
      }
    }, 20);

    return () => {
      clearInterval(id);
    };
  });

  const progressBarStyle = {
    width: `${width}%`,
  };

  return (
    <Html>
      <div className="loader-model absolute bg-blur top-1/2 -translate-y-1/2 -left-1/2 -translate-x-1/2 size-[500px] flex flex-col justify-center items-center">
        <div className="text-white text-3xl font-semibold">
          Click and turn to explore iPhone.
        </div>

        <div className="progress-bar w-36 h-2 bg-gray-300 mt-10 rounded-lg overflow-hidden">
          <div
            className="progress-bar-inner h-full bg-white rounded-lg"
            style={progressBarStyle}
          ></div>
        </div>
      </div>
    </Html>
  );
};
