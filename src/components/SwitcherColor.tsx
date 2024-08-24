import { useState } from "react";
import { colors } from "../constants";

export const SwitcherColor = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="gallery-image relative my-16 flex min-h-[450px] w-full items-center justify-center lg:my-20">
        {colors.map((color, index) => (
          <img
            key={index}
            className={`img-active absolute h-[300px] object-contain ${
              selectedColor === index ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 lg:h-[450px] lg:w-2/3`}
            src={color.img}
            alt={color.desc}
          />
        ))}
      </div>

      <p className="desc-iphone max-w-[200px] text-center text-xs lg:max-w-[450px]">
        {colors[selectedColor].desc}
      </p>

      <div className="selector mt-2 flex h-14 w-60 items-center justify-between rounded-full bg-[#2e2e30] p-4">
        {colors.map((color, index) => (
          <div key={index}>
            <input
              type="radio"
              name="color"
              id={color.desc}
              onClick={() => setSelectedColor(index)}
              className="peer hidden"
              defaultChecked={index === 0}
            />
            <label
              htmlFor={color.desc}
              className="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition-colors duration-500 focus:outline focus:outline-4 active:outline active:outline-4 peer-checked:border-2 peer-checked:border-white"
            >
              <span
                style={{
                  backgroundColor: color.color,
                  backgroundImage: `url(${color.bgImg})`,
                }}
                className={`block size-6 overflow-hidden rounded-full bg-center`}
              ></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
