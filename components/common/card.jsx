import Text from "../typography/text";
import CardLottie from "../lottie/cardLottie";
import classNames from "classnames";
import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";

/**
 * @param title - plan text
 * @param elements - plain array of texts
 * @param lottie - takes values such as "pr", "design", "marketing", "social"
 * @param lottie - takes values such as "blue"
 */
export default function Card({ title, elements, lottie, color }) {
  let [isLottiePlaying, setLottiePlaying] = useState(false);
  let windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 1280) {
      setLottiePlaying(true);
    }
  });

  let wrapperClasses = classNames({
    "w-full h-full md:h-500 lg:h-690 flex flex-col items-center md:items-start group cursor-pointer transition md:duration-300 md:ease-in-out md:shadow-cardShadow md:hover:shadow-cardShadowActive relative": true,
  });

  const arrowClasses = classNames({
    "hidden absolute bottom-2 right-2 lg:bottom-4 lg:right-4": true,
    "md:block": isLottiePlaying,
    "md:hidden": !isLottiePlaying,
  });

  wrapperClasses += " bg-" + color;

  return (
    <div
      onMouseEnter={() => setLottiePlaying(true)}
      onTouchStart={() => setLottiePlaying(true)}
      onMouseLeave={() => setLottiePlaying(false)}
      onTouchEnd={() => setLottiePlaying(false)}
      className={wrapperClasses}
    >
      <div className="md:w-full md:flex md:justify-center">
        <CardLottie isLottiePlaying={isLottiePlaying} lottie={lottie} />
      </div>
      <header className="mb-8 md:mb-4 lg:mb-8 md:ml-5 lg:ml-10">
        <Text size="h3" color="white">
          {title}
        </Text>
      </header>
      <div className="mb-14 md:ml-5 md:group-hover:ml-5 lg:ml-10">
        {elements.map((el, idx) => (
          <Text
            key={idx}
            size="body-16"
            color="white"
            custom="text-center md:text-left md:leading-6 lg:leading-8"
          >
            {el.card_item}
          </Text>
        ))}
      </div>
      <div
        className="w-full flex justify-end opacity-0 transition-opacity duration-200 ease-out"
        style={{
          opacity: isLottiePlaying ? "100" : "0",
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={arrowClasses}
        >
          <path d="M17.6778 14H45.6778V18H17.6778V14Z" fill="white" />
          <path
            d="M41.6778 42L41.6778 14L45.6778 14V42H41.6778Z"
            fill="white"
          />
          <path
            d="M40.8702 15.9792L43.6986 18.8077L15.4144 47.0919L12.5859 44.2635L40.8702 15.9792Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
