import Text from "../typography/text";
import Image from "next/image";
import SliderArrow from "../common/sliderArrow";
import {useEffect, useRef, useState} from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function LesserSlider({ slides }) {
  let [currentSlide, setCurrentSlide] = useState(0);
  let [swipeStart, setSwipeStart] = useState(0)
  let [swipeEnd, setSwipeEnd] = useState(0)

  let windowSize = useWindowSize();

  const handleClick = (value) => {
    setCurrentSlide((currentSlide += value));
  };

  const handleStart = (event) => {
    setSwipeStart(event.touches[0].clientX)
  }

  const handleMove = (event) => {
    setSwipeEnd(event.touches[0].clientX)
  }

  const handleEnd = () => {
    if (swipeStart < swipeEnd) {
      //right
      if (currentSlide !== 0) {
        handleClick(-1)
      }
    } else {
      // left
      if (currentSlide !== slides.length - 1) {
        handleClick(1)
      }
    }
  }

  return (
    <div className="my-36 md:mt-44">
      <div className="flex flex-col items-center md:flex-row-reverse md:items-start lg:justify-center"
           onTouchStart={handleStart}
           onTouchMove={handleMove}
           onTouchEnd={handleEnd}
      >
        <div className="w-full md:w-1/2 lg:w-initial z-10 transform translate-y-8 md:translate-y-0 md:flex-50 lg:flex-initial">
          {slides.map((item, index) => (
            <div
              key={index}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              className="w-full md:max-h-initial lg:min-h-80 lg:max-h-full"
              style={{
                zIndex: index === currentSlide ? 1000 : 999 + -1 * index,
                display: index === currentSlide ? 'block' : 'none',
              }}
            >
              { item.slider_photo &&
                <Image
                  quality={100}
                  src={item.slider_photo.sizes["post-thumbnail"]}
                  alt={item.slider_photo.alt}
                  width={item.slider_photo.sizes["post-thumbnail-width"]}
                  height={item.slider_photo.sizes["post-thumbnail-height"]}
                  // layout="fill"
                  // objectFit="cover"
                />
              }
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-grey-hover shadow-slider md:shadow-none relative overflow-hidden min-w-full min-h-300 lg:min-h-40">
            <div
              className="min-w-full min-h-300 lg:min-h-40 art-transition"
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
                  className="absolute top-1/3 md:top-0 md:flex md:h-full md:items-center lg:px-10 md:pl-16 md:pr-10"
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
                    custom="md:text-1.25 md:leading-2.625 px-6"
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
    </div>
  );
}
