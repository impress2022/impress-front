import Text from "../typography/text";
import Image from "next/image";
import SliderArrow from "../common/sliderArrow";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function LesserSlider({ slides }) {
  let [currentSlide, setCurrentSlide] = useState(0);
  let windowSize = useWindowSize();

  const handleClick = (value) => {
    setCurrentSlide((currentSlide += value));
  };

  return (
    <div className="mt-500 md:mt-44">
      <div className="flex flex-col items-center md:items-start relative">
        <div className="w-full z-10">
          {slides.map((item, index) => (
            <div
              key={index}
              className="absolute transform -translate-y-80p md:translate-y-0 md:right-0 h-full w-full md:w-1/2 lg:w-2/3 max-h-350 lg:min-h-80 lg:max-h-full shadow-sliderMobile md:shadow-sliderTablet"
              style={{
                zIndex: index === currentSlide ? 1000 : 999 + -1 * index,
              }}
            >
              <Image
                src={item.slider_photo.sizes["post-thumbnail"]}
                alt={item.slider_photo.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div className="bg-grey-hover shadow-slider md:shadow-none relative overflow-hidden min-w-full min-h-300 lg:min-h-40">
          <div
            className="min-w-full min-h-300 lg:min-h-40 transition-transform duration-200 ease-linear"
            style={{
              transform:
                windowSize.width > 1280
                  ? "translateX(-" + 500 * currentSlide + "px)"
                  : "translateX(-" + 100 * currentSlide + "%)",
            }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className="absolute top-1/3 md:top-0 md:flex md:h-full md:items-center md:max-w-50 lg:max-w-1/3 lg:px-10 md:pl-16 md:pr-10"
                style={{
                  transform:
                    windowSize.width > 1280
                      ? "translateX(" + 500 * index + "px)"
                      : "translateX(" + 100 * index + "%)",
                }}
              >
                <Text
                  size="body-18"
                  color="white"
                  custom="md:text-1.5 md:leading-2.625"
                >
                  {item.slider_desc}
                </Text>
              </div>
            ))}
          </div>
        </div>
        <div className="arrows flex">
          <SliderArrow
            direction="left"
            active={currentSlide !== 0}
            handleClick={handleClick}
            currentIndex={currentSlide}
            maxElements={slides.length}
          />
          <SliderArrow
            active={currentSlide !== slides.length - 1}
            handleClick={handleClick}
            currentIndex={currentSlide}
            maxElements={slides.length}
          />
        </div>
      </div>
    </div>
  );
}
